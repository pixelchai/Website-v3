---
title: Tetris
subtitle: A simple tetris game implementation in Python.
date: 2018-12-31 9:30:00
---

The implementation is split into two different parts: the internal game model - [tetris.py](https://github.com/pixelchai/Tetris/blob/master/tetris.py), which is independent of all graphics and is the core of the game, and the graphics engine - [gfx_engine.py](https://github.com/pixelchai/Tetris/blob/master/gfx_engine.py) which provides a user interface to the internal game model, as well as handling drawing and graphics-related stuff through the use of PyGame.

Each `Piece` has an array of rotation configurations associated with it, as well as a [function](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L237) which calculates the width of the piece, used for when pieces are spawned (to make sure they aren't cut off).

The `Board` object handles almost all of the actual [game logic](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L386) such as [gravity](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L415), [collision](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L338) (overlapping blocks), [line clearing](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L400), etc. At any one time, there is only ever a single `Piece` instance, which is the currently falling piece. Once that falling piece is at rest, it's block data is [committed](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L291) to the board's block data, and the object is replaced with new, [randomly spawned](https://github.com/pixelchai/Tetris/blob/master/tetris.py#L320) `Piece` instance. There is no need to keep an object for every piece that has ever fallen - that would make things overcomplicated, especially considering the fact that once a Piece is at rest, it can't be moved by the user anymore and its blocks seem to act independently from each other.

I am planning to implement some sort of AI for this in the future.
