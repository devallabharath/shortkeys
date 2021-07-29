const tiles = [
  {
    key: '1',
    text1: 'Center',
    text2: '⌥  +  ⌘  +  C',
  },
  {
    key: '2',
    text1: 'Fullscreen',
    text2: '⌥  +  ⌘  +  F',
  },
  {
    key: '3',
    text1: 'Half-left',
    text2: '⌥  +  ⌘  +  ←',
  },
  {
    key: '4',
    text1: 'Half-right',
    text2: '⌥  +  ⌘  +  →',
  },
  {
    key: '5',
    text1: 'Half-top',
    text2: '⌥  +  ⌘  +  ↑',
  },
  {
    key: '6',
    text1: 'Half-bottom',
    text2: '⌥  +  ⌘  +  ↓',
  },
  {
    key: '7',
    text1: 'Upper-left',
    text2: '⌥  +  ⌘  +  U',
  },
  {
    key: '8',
    text1: 'Upper-right',
    text2: '⌥  +  ⌘  +  I',
  },
  {
    key: '9',
    text1: 'Lower-left',
    text2: '⌥  +  ⌘  +  J',
  },
  {
    key: '10',
    text1: 'Lower-right',
    text2: '⌥  +  ⌘  +  K',
  },
  {
    key: '11',
    text1: 'Left-30%',
    text2: '⌃  +  ⌥  +  ←',
  },
  {
    key: '12',
    text1: 'Rigth-30%',
    text2: '⌃  +  ⌥  +  →',
  },
  {
    key: '13',
    text1: 'Left-75%',
    text2: '⌃  +  ⌘  +  ←',
  },
  {
    key: '14',
    text1: 'Right-75%',
    text2: '⌃  +  ⌘  +  →',
  },
  {
    key: '15',
    text1: 'Next Display',
    text2: '⌃  +  ⌥  +  ⌘  +  →',
  },
  {
    key: '16',
    text1: 'Prev Display',
    text2: '⌃  +  ⌥  +  ⌘  +  ←',
  },
  {
    key: '17',
    text1: 'Restore / Undo',
    text2: '⌥  +  ⌘  +  Y',
  },
]

const finder= [
  {
    key: '1',
    text1: '',
    text2: '',
  },
  {
    key: '2',
    text1: '',
    text2: '',
  },
  {
    key: '3',
    text1: '',
    text2: '',
  },
  {
    key: '4',
    text1: '',
    text2: '',
  },
  {
    key: '5',
    text1: '',
    text2: '',
  },
  {
    key: '6',
    text1: '',
    text2: '',
  },
  {
    key: '7',
    text1: '',
    text2: '',
  },
  {
    key: '8',
    text1: '',
    text2: '',
  },
  {
    key: '9',
    text1: '',
    text2: '',
  },
  {
    key: '10',
    text1: '',
    text2: '',
  },
]

const vscode= [
  {
    key: '1',
    text1: 'New file',
    text2: '⌘  +  N',
  },
  {
    key: '2',
    text1: 'Open file',
    text2: '⌘  +  O',
  },
  {
    key: '3',
    text1: 'Save file',
    text2: '⌘  +  S',
  },
  {
    key: '4',
    text1: 'Sidebar',
    text2: '⌘  +  B',
  },
  {
    key: '5',
    text1: 'Files pallete',
    text2: '⌘  +  P',
  },
  {
    key: '6',
    text1: 'Command pallete',
    text2: '⇧  +  ⌘  +  P',
  },
  {
    key: '7',
    text1: 'Tab Close',
    text2: '⌘  +  W',
  },
  {
    key: '8',
    text1: 'Undo',
    text2: '⌘  +  Z',
  },
  {
    key: '9',
    text1: 'Redo',
    text2: '⌘  +  / ',
  },
  {
    key: '10',
    text1: 'Find',
    text2: '⌘  +  F',
  },
  {
    key: '11',
    text1: 'Auto Suggest',
    text2: '⇧  +  ⌘  +  Z',
  },
  {
    key: '12',
    text1: 'Comment line',
    text2: '⌘  +  / ',
  },
  {
    key: '13',
    text1: 'Delete line',
    text2: '⇧ + ⌘ + K',
  },
  {
    key: '14',
    text1: 'Move line',
    text2: '⌥  +  ↑/↓',
  },
  {
    key: '15',
    text1: 'Line indentation',
    text2: '⌘  +  [ / ]',
  },
  {
    key: '16',
    text1: 'Line duplicate',
    text2: '⇧  +  ⌥  +  ↑/↓',
  },
  {
    key: '17',
    text1: 'New line up',
    text2: '⇧  +  ⌘  +  ⏎',
  },
  {
    key: '18',
    text1: 'New line down',
    text2: '⌘  +  ⏎',
  },
  {
    key: '19',
    text1: 'Line start/end',
    text2: '⌘  +  ←/→',
  },
  {
    key: '20',
    text1: 'Word start/end',
    text2: '⌥  +  ←/→'
  },
  {
    key: '21',
    text1: 'Terminal',
    text2: '⌃  +  `',
  },
  {
    key: '22',
    text1: 'New Terminal',
    text2: '⇧  +  ⌃  +  `',
  },
  {
    key: '23',
    text1: 'Resize Terminal',
    text2: '⌃  +  ⌘  +  ↑/↓',
  },
];

const sublime= [
  {
    key: '1',
    text1: 'Open file',
    text2: '⌘  +  O',
  },
  {
    key: '2',
    text1: 'Save file',
    text2: '⌘  +  S',
  },
  {
    key: '3',
    text1: 'Sidebar',
    text2: '⌥  +  B',
  },
  {
    key: '4',
    text1: 'Build',
    text2: '⌘  +  B',
  },
  {
    key: '5',
    text1: 'Comment line',
    text2: '⌥  +  C',
  },
  {
    key: '6',
    text1: 'Delete line',
    text2: '⌥  +  X',
  },
  {
    key: '7',
    text1: 'Move line',
    text2: '⌥  +  ↑/↓',
  },
  {
    key: '8',
    text1: 'Line indentation',
    text2: '⌥  +  ←/→',
  },
  {
    key: '9',
    text1: 'Line duplicate',
    text2: '⌥  +  D',
  },
  {
    key: '10',
    text1: 'New line up',
    text2: '⌃  +  ⏎',
  },
  {
    key: '11',
    text1: 'New line down',
    text2: '⇧  +  ⌃  +  ⏎',
  },
  {
    key: '12',
    text1: 'Line start/end',
    text2: '⌘  +  ←/→',
  },
  {
    key: '13',
    text1: 'Word start/end',
    text2: '⌃  +  ←/→',
  },
];

const safari = [
  {
    key: '1',
    text1: 'HomePage',
    text2: '⇧  +  ⌘  +  H',
  },
  {
    key: '2',
    text1: 'URL Bar',
    text2: '⌘  +  L',
  },
  {
    key: '3',
    text1: 'Reaload Page',
    text2: '⌘  +  R',
  },
  {
    key: '4',
    text1: 'Page Search',
    text2: '⌘  +  F',
  },
  {
    key: '5',
    text1: 'Open in new Tab',
    text2: '⌘  +  click',
  },
  {
    key: '6',
    text1: 'Download Link',
    text2: '⌥  +  click',
  },
  {
    key: '7',
    text1: 'Reader View',
    text2: '⇧  +  ⌘  +  R',
  },
  {
    key: '8',
    text1: 'SideBar',
    text2: '⌃  +  ⌘  +  1',
  },
  {
    key: '9',
    text1: 'Print Page',
    text2: '⌘  +  P',
  },
  {
    key: '10',
    text1: 'Add Tab',
    text2: '⌘  +  T',
  },
  {
    key: '11',
    text1: 'Close Tab',
    text2: '⌘  +  W',
  },
  {
    key: '12',
    text1: 'Close all Tabs',
    text2: '⌥  +  ⌘  +  W',
  },
  {
    key: '13',
    text1: 'Next Tab',
    text2: '⌃  +  tab',
  },
  {
    key: '14',
    text1: 'Prev Tab',
    text2: '⌃  +  ⇧  +  tab',
  },
  {
    key: '15',
    text1: 'Overview Tabs',
    text2: '⇧  +  ⌘  +  \\',
  },
  {
    key: '16',
    text1: 'Preferences',
    text2: '⌘  +  ,',
  },
];


exports.tiles = tiles;
exports.sublime = sublime;
exports.vscode = vscode;
exports.safari = safari;