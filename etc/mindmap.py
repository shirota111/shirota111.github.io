import tkinter as tk
from tkinter import simpledialog

class SimpleMindMapApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Simple Mind Map")
        self.canvas = tk.Canvas(self.root, width=800, height=600, bg="white")
        self.canvas.pack(fill="both", expand=True)

        self.nodes = []  # ノードリスト
        self.lines = []  # ノードを繋ぐ線リスト
        self.selected_node = None  # 中クリックで選択したノード

        # 全消しボタンの追加
        clear_button = tk.Button(self.root, text="全消し", command=self.clear_all)
        clear_button.pack()

        # イベントリスナー
        self.canvas.bind("<Button-1>", self.on_left_click)      # 左クリック
        self.canvas.bind("<Shift-Button-1>", self.on_shift_left_click)  # Shift + 左クリックで線削除
        self.canvas.bind("<Button-3>", self.on_right_click)     # 右クリックでノード作成
        self.canvas.bind("<Shift-Button-3>", self.on_shift_right_click)  # Shift + 右クリックでノード削除
        self.canvas.bind("<Button-2>", self.on_middle_click)    # 中クリックで線作成

    def create_node(self, text, x, y):
        node = {
            "text": text,
            "x": x,
            "y": y,
            "id": self.canvas.create_oval(x-50, y-30, x+50, y+30, fill="lightblue"),
            "text_id": self.canvas.create_text(x, y, text=text, font=("Arial", 12))
        }
        self.nodes.append(node)

    def delete_node(self, node):
        self.canvas.delete(node["id"])
        self.canvas.delete(node["text_id"])
        self.nodes.remove(node)

        # ノードに接続された線も削除
        connected_lines = [line for line in self.lines if line["from"] == node or line["to"] == node]
        for line in connected_lines:
            self.delete_line(line)

    def create_line(self, from_node, to_node):
        line = {
            "from": from_node,
            "to": to_node,
            "id": self.canvas.create_line(from_node["x"], from_node["y"], to_node["x"], to_node["y"])
        }
        self.lines.append(line)

    def delete_line(self, line):
        self.canvas.delete(line["id"])
        self.lines.remove(line)

    def clear_all(self):
        # すべてのノードと線を削除
        self.clear_all_nodes()
        self.clear_all_lines()

    def clear_all_nodes(self):
        # すべてのノードを削除
        for node in self.nodes[:]:
            self.delete_node(node)

    def clear_all_lines(self):
        # すべての線を削除
        for line in self.lines[:]:
            self.delete_line(line)

    def on_left_click(self, event):
        pass  # 左クリックでは何もしない

    def on_shift_left_click(self, event):
        # Shift + 左クリックで線削除
        clicked_line = self.find_line_at_position(event.x, event.y)
        if clicked_line:
            self.delete_line(clicked_line)

    def on_right_click(self, event):
        # 右クリックでノード作成
        new_node_text = simpledialog.askstring("Input", "Enter node text:")
        if new_node_text:
            self.create_node(new_node_text, event.x, event.y)

    def on_shift_right_click(self, event):
        # Shift + 右クリックでノード削除
        clicked_node = self.find_node_at_position(event.x, event.y)
        if clicked_node:
            self.delete_node(clicked_node)

    def on_middle_click(self, event):
        # 中クリックで線を作成
        clicked_node = self.find_node_at_position(event.x, event.y)
        if clicked_node:
            if self.selected_node:
                # すでに選択されたノードがあれば線を作成
                self.create_line(self.selected_node, clicked_node)
                self.selected_node = None
            else:
                # ノードを選択
                self.selected_node = clicked_node

    def find_node_at_position(self, x, y):
        for node in self.nodes:
            if node["x"] - 50 < x < node["x"] + 50 and node["y"] - 30 < y < node["y"] + 30:
                return node
        return None

    def find_line_at_position(self, x, y):
        for line in self.lines:
            x1, y1 = line["from"]["x"], line["from"]["y"]
            x2, y2 = line["to"]["x"], line["to"]["y"]
            if min(x1, x2) - 5 <= x <= max(x1, x2) + 5 and min(y1, y2) - 5 <= y <= max(y1, y2) + 5:
                return line
        return None

# メインアプリケーションの実行
if __name__ == "__main__":
    root = tk.Tk()
    app = SimpleMindMapApp(root)
    root.mainloop()
