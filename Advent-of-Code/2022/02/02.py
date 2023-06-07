with open('input.txt') as file:
    strategy_guide = file.readlines()

total_score = 0

for strategy in strategy_guide:
    opponent_move = strategy[0]  # A, B, or C
    your_move = strategy[2]  # X, Y, or Z

    if your_move == 'X':  # X means Rock
        your_score = 1
        if opponent_move == 'A':  # A means Rock
            total_score += your_score + 3  # draw
        elif opponent_move == 'B':  # B means Paper
            total_score += your_score  # lose
        else:  # C means Scissors
            total_score += your_score + 6  # win

    elif your_move == 'Y':  # Y means Paper
        your_score = 2
        if opponent_move == 'A':  # A means Rock
            total_score += your_score + 6  # win
        elif opponent_move == 'B':  # B means Paper
            total_score += your_score + 3  # draw
        else:  # C means Scissors
            total_score += your_score  # lose

    else:  # Z means Scissors
        your_score = 3
        if opponent_move == 'A':  # A means Rock
            total_score += your_score  # lose
        elif opponent_move == 'B':  # B means Paper
            total_score += your_score + 6  # win
        else:  # C means Scissors
            total_score += your_score + 3  # draw

print("Total score: ", total_score)