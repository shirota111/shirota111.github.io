import pandas as pd
import tkinter as tk
from tkinter import filedialog, messagebox

class ExcelEditorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Excel Editor")

        # ボタンを作成
        self.load_button = tk.Button(root, text="Excelファイルを選択", command=self.load_file)
        self.load_button.pack(pady=10)

        self.cell_label = tk.Label(root, text="変更するセル (例: A1):")
        self.cell_label.pack()

        self.cell_entry = tk.Entry(root)
        self.cell_entry.pack(pady=5)

        self.value_label = tk.Label(root, text="新しい値:")
        self.value_label.pack()

        self.value_entry = tk.Entry(root)
        self.value_entry.pack(pady=5)

        self.save_button = tk.Button(root, text="保存", command=self.save_file)
        self.save_button.pack(pady=10)

        self.file_path = None
        self.df = None

    def load_file(self):
        self.file_path = filedialog.askopenfilename(filetypes=[("Excel files", "*.xlsx;*.xls")])
        if self.file_path:
            self.df = pd.read_excel(self.file_path)
            messagebox.showinfo("情報", "ファイルが読み込まれました！")

    def save_file(self):
        if self.df is not None:
            cell = self.cell_entry.get().upper()  # 大文字に変換
            new_value = self.value_entry.get()

            # セルの行と列を計算
            try:
                row = int(cell[1:]) - 1  # 行番号（0-indexed）
                col = ord(cell[0]) - ord('A')  # 列番号（0-indexed）

                self.df.iat[row, col] = new_value  # 値を設定
                output_path = self.file_path.replace(".xlsx", "_modified.xlsx")
                self.df.to_excel(output_path, index=False)

                messagebox.showinfo("成功", f"新しい値が保存されました: {output_path}")
            except Exception as e:
                messagebox.showerror("エラー", f"エラーが発生しました: {e}")
        else:
            messagebox.showwarning("警告", "まずExcelファイルを読み込んでください。")

# GUIアプリケーションの実行
if __name__ == "__main__":
    root = tk.Tk()
    app = ExcelEditorApp(root)
    root.mainloop()