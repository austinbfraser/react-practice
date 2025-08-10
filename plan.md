# dev plan

## component structure

- main container
  - header (build this last)
  - display
  - keypad
    - key (should this be a component or just a button?)

## functionality

- pieces of state:
  - input represents the running string of numbers and symbols
    - pressing = fires off evaluation of input string
    - at this point, display AND input become the evaluated result (= DOES THIS PART)
  - display represents the last numeric input: everything until a symbol is input
- each keypress renders to the display and adds to input
- reset wipes both input and display

- considerations
  - deal with/sanitize input of multiple 0s
  - protect against div by 0
  - how to sanitize input to use the eval() method safely
  - insert comma every 3 digits?
  - how to treat values too wide for display?