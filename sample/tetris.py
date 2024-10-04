import pygame
import random

# Initialize pygame
pygame.init()

# Constants
SCREEN_WIDTH = 300
SCREEN_HEIGHT = 600
BLOCK_SIZE = 30
FPS = 10

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
COLORS = [
    (255, 0, 0),    # Red
    (0, 255, 0),    # Green
    (0, 0, 255),    # Blue
    (255, 255, 0),  # Yellow
    (255, 165, 0),  # Orange
]

# Tetrimino shapes
SHAPES = [
    [[1, 1, 1, 1]],  # I shape
    [[1, 1, 1], [0, 1, 0]],  # T shape
    [[1, 1, 0], [0, 1, 1]],  # Z shape
    [[0, 1, 1], [1, 1, 0]],  # S shape
    [[1, 1], [1, 1]],  # O shape
]

# Game grid
grid = [[0 for _ in range(SCREEN_WIDTH // BLOCK_SIZE)] for _ in range(SCREEN_HEIGHT // BLOCK_SIZE)]

# Score
score = 0

def draw_grid(surface):
    for y in range(len(grid)):
        for x in range(len(grid[y])):
            if grid[y][x]:
                pygame.draw.rect(surface, grid[y][x], (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))

class Tetromino:
    def __init__(self):
        self.shape = random.choice(SHAPES)
        self.color = random.choice(COLORS)
        self.x = SCREEN_WIDTH // BLOCK_SIZE // 2 - len(self.shape[0]) // 2
        self.y = 0

    def rotate(self):
        self.shape = [list(row) for row in zip(*self.shape[::-1])]

    def get_positions(self):
        positions = []
        for y, row in enumerate(self.shape):
            for x, cell in enumerate(row):
                if cell:
                    positions.append((self.x + x, self.y + y))
        return positions

def draw_tetromino(surface, tetromino):
    for y, row in enumerate(tetromino.shape):
        for x, cell in enumerate(row):
            if cell:
                pygame.draw.rect(surface, tetromino.color, ((tetromino.x + x) * BLOCK_SIZE, (tetromino.y + y) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))

def check_collision(tetromino):
    for x, y in tetromino.get_positions():
        if x < 0 or x >= SCREEN_WIDTH // BLOCK_SIZE or y >= SCREEN_HEIGHT // BLOCK_SIZE or grid[y][x]:
            return True
    return False

def merge_tetromino(tetromino):
    for x, y in tetromino.get_positions():
        grid[y][x] = tetromino.color

def clear_lines():
    global score
    for i in range(len(grid) - 1, -1, -1):
        if all(grid[i]):
            del grid[i]
            grid.insert(0, [0 for _ in range(SCREEN_WIDTH // BLOCK_SIZE)])
            score += 100

def main():
    global score
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
    clock = pygame.time.Clock()
    running = True

    current_tetromino = Tetromino()

    while running:
        screen.fill(BLACK)
        draw_grid(screen)
        draw_tetromino(screen, current_tetromino)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    current_tetromino.x -= 1
                    if check_collision(current_tetromino):
                        current_tetromino.x += 1
                if event.key == pygame.K_RIGHT:
                    current_tetromino.x += 1
                    if check_collision(current_tetromino):
                        current_tetromino.x -= 1
                if event.key == pygame.K_DOWN:
                    current_tetromino.y += 1
                    if check_collision(current_tetromino):
                        current_tetromino.y -= 1
                if event.key == pygame.K_UP:
                    current_tetromino.rotate()
                    if check_collision(current_tetromino):
                        current_tetromino.rotate()  # Rotate back if collision

        current_tetromino.y += 1
        if check_collision(current_tetromino):
            current_tetromino.y -= 1
            merge_tetromino(current_tetromino)
            clear_lines()
            current_tetromino = Tetromino()
            if check_collision(current_tetromino):
                print("Game Over")
                running = False

        draw_grid(screen)
        draw_tetromino(screen, current_tetromino)

        pygame.display.flip()
        clock.tick(FPS)

    pygame.quit()

if __name__ == "__main__":
    main()
