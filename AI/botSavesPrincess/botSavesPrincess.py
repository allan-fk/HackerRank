# https://www.hackerrank.com/challenges/saveprincess/problem
def displayPathtoPrincess(n, grid):
    # Trouver la position du bot et de la princesse
    bot_row, bot_col = None, None
    princess_row, princess_col = None, None
    for row in range(n):
        for col in range(n):
            if grid[row][col] == "m":
                bot_row, bot_col = row, col
            elif grid[row][col] == "p":
                princess_row, princess_col = row, col
    # Determiner les deplacements necessaires pour atteindre la princesse
    moves = []
    if bot_row < princess_row:
        moves.extend(["DOWN"] * (princess_row - bot_row))
    elif bot_row > princess_row:
        moves.extend(["UP"] * (bot_row - princess_row))
    if bot_col < princess_col:
        moves.extend(["RIGHT"] * (princess_col - bot_col))
    elif bot_col > princess_col:
        moves.extend(["LEFT"] * (bot_col - princess_col))
    # Afficher les deplacements necessaires
    print("\n".join(moves))
