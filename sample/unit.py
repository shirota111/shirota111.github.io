import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk
import json

# ユニットデータをロード
def load_unit_data():
    with open('unitData.json', 'r', encoding='utf-8') as f:
        return json.load(f)

class UnitPlacementApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Layered Canvas and Data Viewer")

        # キャンバスの設定
        self.canvas = tk.Canvas(root, width=600, height=600, bg="white")
        self.canvas.pack()

        self.unit_data = load_unit_data()
        self.selected_unit = None

        # ユニット番号入力
        self.unit_input = tk.Entry(root)
        self.unit_input.pack(pady=10)

        self.place_unit_btn = tk.Button(root, text="ユニット配置", command=self.place_unit)
        self.place_unit_btn.pack()

        # データ表示エリア
        self.data_display = tk.Text(root, width=30, height=15)
        self.data_display.pack(pady=10)

        # タイル表示
        self.draw_tiles()

        # キャンバスのクリックイベント
        self.canvas.bind("<Button-1>", self.highlight_tile)

    def draw_tiles(self):
        # タイルを描画
        for i in range(12):
            for j in range(12):
                x1, y1 = i * 50 + 5, j * 50 + 5
                x2, y2 = x1 + 40, y1 + 40
                self.canvas.create_rectangle(x1, y1, x2, y2, outline="black")

    def highlight_tile(self, event):
        # タイルのハイライト
        tile_size = 50
        click_x = event.x
        click_y = event.y

        tile_x = (click_x // tile_size) * tile_size + 5
        tile_y = (click_y // tile_size) * tile_size + 5

        self.canvas.delete("highlight")  # 以前のハイライトを削除
        self.canvas.create_rectangle(tile_x, tile_y, tile_x + 40, tile_y + 40, fill='red', stipple='gray12', tags="highlight")

    def place_unit(self):
        if not self.unit_input.get():
            return

        unit_id = self.unit_input.get()
        unit_info = self.unit_data.get(unit_id)

        if not unit_info:
            print('指定されたユニットIDが存在しません')
            return

        # ユニット画像を配置
        unit_image = Image.open(unit_info['image'])
        unit_image = unit_image.resize((40, 40), Image.ANTIALIAS)
        unit_tk = ImageTk.PhotoImage(unit_image)

        self.canvas.create_image(100, 100, image=unit_tk)  # 位置は適宜変更してください
        self.canvas.image = unit_tk  # 参照を保持

        # データ表示
        self.data_display.delete(1.0, tk.END)
        self.data_display.insert(tk.END, f"Name: {unit_info['name']}\n")

# メイン処理
if __name__ == "__main__":
    root = tk.Tk()
    app = UnitPlacementApp(root)
    root.mainloop()
