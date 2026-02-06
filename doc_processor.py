#!/usr/bin/env python3
"""
免费文档处理工具 - 基于PaddleOCR
支持: PDF, JPG, PNG 等格式
输出: Markdown, JSON, CSV
"""

import os
import json
import cv2
import numpy as np
from PIL import Image
from paddleocr import PaddleOCR
from pdf2image import convert_from_path
import pandas as pd

class FreeDocProcessor:
    def __init__(self):
        # 初始化PaddleOCR（中文+英文）
        self.ocr = PaddleOCR(
            use_angle_cls=True,
            lang='ch',
            show_log=False
        )
    
    def process_image(self, image_path):
        """处理单张图片"""
        result = self.ocr.ocr(image_path, cls=True)
        return self._format_result(result)
    
    def process_pdf(self, pdf_path):
        """处理PDF文件"""
        # 将PDF转为图片
        images = convert_from_path(pdf_path)
        all_results = []
        
        for i, image in enumerate(images):
            # 保存临时图片
            temp_path = f"/tmp/page_{i}.jpg"
            image.save(temp_path, 'JPEG')
            
            # OCR处理
            result = self.ocr.ocr(temp_path, cls=True)
            all_results.append({
                'page': i + 1,
                'content': self._format_result(result)
            })
            
            # 清理临时文件
            os.remove(temp_path)
        
        return all_results
    
    def _format_result(self, result):
        """格式化OCR结果"""
        if not result or not result[0]:
            return ""
        
        text_lines = []
        for line in result[0]:
            text = line[1][0]  # 提取文字
            confidence = line[1][1]  # 置信度
            text_lines.append(text)
        
        return "\n".join(text_lines)
    
    def to_markdown(self, content):
        """转换为Markdown格式"""
        if isinstance(content, list):  # PDF多页
            md_content = ""
            for page in content:
                md_content += f"## Page {page['page']}\n\n{page['content']}\n\n"
            return md_content
        else:  # 单张图片
            return content
    
    def extract_table(self, image_path):
        """简单表格提取（基于文本位置）"""
        result = self.ocr.ocr(image_path, cls=True)
        if not result or not result[0]:
            return []
        
        # 按Y坐标分组（粗略的行检测）
        lines = {}
        for line in result[0]:
            y_coord = int(line[0][0][1])  # 左上角Y坐标
            text = line[1][0]
            confidence = line[1][1]
            
            # 找到最近的行
            found_row = False
            for existing_y in lines.keys():
                if abs(y_coord - existing_y) < 10:  # 同一行的阈值
                    lines[existing_y].append((line[0][0][0], text))  # X坐标, 文本
                    found_row = True
                    break
            
            if not found_row:
                lines[y_coord] = [(line[0][0][0], text)]
        
        # 按X坐标排序每行
        table_rows = []
        for y_coord in sorted(lines.keys()):
            row = lines[y_coord]
            row.sort(key=lambda x: x[0])  # 按X坐标排序
            table_rows.append([cell[1] for cell in row])
        
        return table_rows

def main():
    processor = FreeDocProcessor()
    
    # 示例使用
    import sys
    if len(sys.argv) < 2:
        print("Usage: python doc_processor.py <file_path>")
        return
    
    file_path = sys.argv[1]
    
    if file_path.lower().endswith('.pdf'):
        result = processor.process_pdf(file_path)
        markdown = processor.to_markdown(result)
        print(markdown)
    else:
        result = processor.process_image(file_path)
        print(result)

if __name__ == "__main__":
    main()