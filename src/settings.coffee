retro = require('node-retro')
fs = require('fs')

module.exports =
  variables: {}
  overscan: false
  tmprom: 'easyplayer.rom'
  region: 'USA'
  key2joy:
    32: retro.DEVICE_ID_JOYPAD_B
    91: retro.DEVICE_ID_JOYPAD_Y
    18: retro.DEVICE_ID_JOYPAD_A
    90: retro.DEVICE_ID_JOYPAD_X
    66: retro.DEVICE_ID_JOYPAD_B
    89: retro.DEVICE_ID_JOYPAD_Y
    65: retro.DEVICE_ID_JOYPAD_A
    88: retro.DEVICE_ID_JOYPAD_X
    76: retro.DEVICE_ID_JOYPAD_L
    82: retro.DEVICE_ID_JOYPAD_R
    222: retro.DEVICE_ID_JOYPAD_SELECT
    13: retro.DEVICE_ID_JOYPAD_START
    16: retro.DEVICE_ID_JOYPAD_SELECT
    9: retro.DEVICE_ID_JOYPAD_SELECT
    73: retro.DEVICE_ID_JOYPAD_X
    74: retro.DEVICE_ID_JOYPAD_Y
    75: retro.DEVICE_ID_JOYPAD_B
    76: retro.DEVICE_ID_JOYPAD_A
    38: retro.DEVICE_ID_JOYPAD_UP
    40: retro.DEVICE_ID_JOYPAD_DOWN
    37: retro.DEVICE_ID_JOYPAD_LEFT
    39: retro.DEVICE_ID_JOYPAD_RIGHT
    87: retro.DEVICE_ID_JOYPAD_UP
    83: retro.DEVICE_ID_JOYPAD_DOWN
    65: retro.DEVICE_ID_JOYPAD_LEFT
    68: retro.DEVICE_ID_JOYPAD_RIGHT
  gp2joy:
    0: retro.DEVICE_ID_JOYPAD_B
    1: retro.DEVICE_ID_JOYPAD_A
    2: retro.DEVICE_ID_JOYPAD_Y
    3: retro.DEVICE_ID_JOYPAD_X
    4: retro.DEVICE_ID_JOYPAD_L
    5: retro.DEVICE_ID_JOYPAD_R
    6: retro.DEVICE_ID_JOYPAD_L2
    7: retro.DEVICE_ID_JOYPAD_R2
    8: retro.DEVICE_ID_JOYPAD_SELECT
    9: retro.DEVICE_ID_JOYPAD_START
    12: retro.DEVICE_ID_JOYPAD_UP
    13: retro.DEVICE_ID_JOYPAD_DOWN
    14: retro.DEVICE_ID_JOYPAD_LEFT
    15: retro.DEVICE_ID_JOYPAD_RIGHT
  fragmentShaderSource: '
  precision mediump float;
  uniform sampler2D u_image;
  varying vec2 v_texCoord;
  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord) ;
  } '
  vertexShaderSource: '
  attribute vec2 a_texCoord;
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0, 1) ;
    v_texCoord = a_texCoord;
  } '
  consoles:
    'Super Nintendo Entertainment System': [
      'snes9x_next_libretro'
      'snes9x_libretro'
    ]
    'Game Boy Color': [ 'gambatte_libretro' ]
    'Game Boy': [ 'gambatte_libretro' ]
    'Game Boy Advance': [
      'vba_next_libretro'
      'vbam_libretro'
      'mednafen_gba_libretro'
    ]
    'Nintendo 64': [ 'mupen64plus_libretro' ]
    'Nintendo Entertainment System': [
      'fceumm_libretro'
      'quicknes_libretro'
      'nestopia_libretro'
    ]
    'Genesis': [
      'genesis_plus_gx_libretro'
      'picodrive_libretro'
    ]
