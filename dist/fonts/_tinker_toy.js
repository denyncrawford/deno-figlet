
  export default {
  "name": "tinker-toy",
  "font": "flf2a$ 7 5 12 -1 12\nTinker-toy by Wendell Hicken 11/93 (whicken@parasoft.com)\n\nExplanation of first line:\nflf2 - \"magic number\" for file identification\na    - should always be `a', for now\n$    - the \"hardblank\" -- prints as a blank, but can't be smushed\n7    - height of a character\n5    - height of a character, not including descenders\n5    - max line length (excluding comment lines) + a fudge factor\n15   - default smushmode for this font (like \"-m 15\" on command line)\n12   - number of comment lines\n\n   $@\n   $@\n   $@\n   $@\n   $@\n   $@\n   $@@\no @\n| @\no @\n  @\nO @\n  @\n  @@\no o @\n| | @\n    @\n    @\n    @\n    @\n    @@\n | |  @\n-O-O- @\n | |  @\n-O-O- @\n | |  @\n      @\n      @@\n  | |   @\n -O-O-  @\no | |   @\n -O-O-  @\n  | | o @\n -O-O-  @\n  | |   @@\no   O @\n   /  @\n  /   @\n /    @\nO   o @\n      @\n      @@\n    @\n  o @\n /| @\no-O-@\n  | @\n    @\n    @@\no @\n| @\n  @\n  @\n  @\n  @\n  @@\n / @\no  @\n|  @\no  @\n \\ @\n   @\n   @@\n\\  @\n o @\n | @\n o @\n/  @\n   @\n   @@\n      @\no | o @\n \\|/  @\n--O-- @\n /|\\  @\no | o @\n      @@\n    @\n |  @\n-o- @\n |  @\n    @\n    @\n    @@\n  @\n  @\n  @\n  @\no @\n| @\n  @@\n    @\n    @\no-o @\n    @\n    @\n    @\n    @@\n  @\n  @\n  @\n  @\nO @\n  @\n  @@\n    o@\n   / @\n  o  @\n /   @\no    @\n     @\n     @@\n o-o  @\no  /o @\n| / | @\no/  o @\n o-o  @\n      @\n      @@\n  0   @\n /|   @\no |   @\n  |   @\no-o-o @\n      @\n      @@\n --  @\no  o @\n  /  @\n /   @\no--o @\n     @\n     @@\no-o  @\n   | @\n oo  @\n   | @\no-o  @\n     @\n     @@\no  o @\n|  | @\no--O @\n   | @\n   o @\n     @\n     @@\no--o @\n|    @\no-o  @\n   | @\no-o  @\n     @\n     @@\n  o   @\n /    @\nO--o  @\no   | @\n o-o  @\n      @\n      @@\no---o @\n   /  @\n  o   @\n  |   @\n  o   @\n      @\n      @@\n o-o  @\n|   | @\n o-o  @\n|   | @\n o-o  @\n      @\n      @@\n o-o  @\n|   o @\n o--O @\n   /  @\n  o   @\n      @\n      @@\n  @\nO @\n  @\nO @\n  @\n  @\n  @@\n  @\no @\n  @\no @\n| @\n  @\n  @@\n  o @\n /  @\nO   @\n \\  @\n  o @\n    @\n    @@\n     @\n     @\no--o @\no--o @\n     @\n     @\n     @@\no   @\n \\  @\n  O @\n /  @\no   @\n    @\n    @@\n o-o  @\no   o @\n   /  @\n  o   @\n      @\n  O   @\n      @@\n  o   @\n / \\  @\no O-o @\n \\    @\n  o-  @\n      @\n      @@\n  O  @\n / \\ @\no---o@\n|   |@\no   o@\n     @\n     @@\no--o  @\n|   | @\nO--o  @\n|   | @\no--o  @\n      @\n      @@\n  o-o @\n /    @\nO     @\n \\    @\n  o-o @\n      @\n      @@\no-o   @\n|  \\  @\n|   O @\n|  /  @\no-o   @\n      @\n      @@\no--o @\n|    @\nO-o  @\n|    @\no--o @\n     @\n     @@\no--o @\n|    @\nO-o  @\n|    @\no    @\n     @\n     @@\n o-o  @\no     @\n|  -o @\no   | @\n o-o  @\n      @\n      @@\no  o @\n|  | @\nO--O @\n|  | @\no  o @\n     @\n     @@\no-O-o @\n  |   @\n  |   @\n  |   @\no-O-o @\n      @\n      @@\n    o @\n    | @\n    | @\n\\   o @\n o-o  @\n      @\n      @@\no  o @\n| /  @\nOO   @\n| \\  @\no  o @\n     @\n     @@\no    @\n|    @\n|    @\n|    @\nO---o@\n     @\n     @@\no   o @\n|\\ /| @\n| O | @\n|   | @\no   o @\n      @\n      @@\no   o @\n|\\  | @\n| \\ | @\n|  \\| @\no   o @\n      @\n      @@\n o-o  @\no   o @\n|   | @\no   o @\n o-o  @\n      @\n      @@\no--o  @\n|   | @\nO--o  @\n|     @\no     @\n      @\n      @@\n o-o  @\no   o @\n|   | @\no   O @\n o-O\\ @\n      @\n      @@\no--o  @\n|   | @\nO-Oo  @\n|  \\  @\no   o @\n      @\n      @@\n o-o  @\n|     @\n o-o  @\n    | @\no--o  @\n      @\n      @@\no-O-o @\n  |   @\n  |   @\n  |   @\n  o   @\n      @\n      @@\no   o @\n|   | @\n|   | @\n|   | @\n o-o  @\n      @\n      @@\no   o @\n|   | @\no   o @\n \\ /  @\n  o   @\n      @\n      @@\no       o @\n|       | @\no   o   o @\n \\ / \\ /  @\n  o   o   @\n          @\n          @@\no   o @\n \\ /  @\n  O   @\n / \\  @\no   o @\n      @\n      @@\no   o @\n \\ /  @\n  O   @\n  |   @\n  o   @\n      @\n      @@\no---o @\n   /  @\n -O-  @\n /    @\no---o @\n      @\n      @@\nO-o @\n|   @\n|   @\n|   @\nO-o @\n    @\n    @@\no    @\n \\   @\n  o  @\n   \\ @\n    o@\n     @\n     @@\no-O @\n  | @\n  | @\n  | @\no-O @\n    @\n    @@\n o  @\n/ \\ @\n    @\n    @\n    @\n    @\n    @@\n     @\n     @\n     @\n     @\n     @\no---o@\n     @@\n0 @\n| @\n  @\n  @\n  @\n  @\n  @@\n    @\n    @\n oo @\n| | @\no-o-@\n    @\n    @@\no    @\n|    @\nO-o  @\n|  | @\no-o  @\n     @\n     @@\n     @\n     @\n o-o @\n|    @\n o-o @\n     @\n     @@\n   o @\n   | @\n o-O @\n|  | @\n o-o @\n     @\n     @@\n    @\n    @\no-o @\n|-' @\no-o @\n    @\n    @@\n o-o@\n |  @\n-O- @\n |  @\n o  @\n    @\n    @@\n     @\n     @\no--o @\n|  | @\no--O @\n   | @\no--o @@\no    @\n|    @\nO--o @\n|  | @\no  o @\n     @\n     @@\n  @\no @\n  @\n| @\n| @\n  @\n  @@\n      @\n    o @\n      @\n    o @\n    | @\no   o @\n o-o  @@\no    @\n| /  @\nOO   @\n| \\  @\no  o @\n     @\n     @@\no @\n| @\n| @\n| @\no @\n  @\n  @@\n      @\n      @\no-O-o @\n| | | @\no o o @\n      @\n      @@\n     @\n     @\no-o  @\n|  | @\no  o @\n     @\n     @@\n    @\n    @\no-o @\n| | @\no-o @\n    @\n    @@\n     @\n     @\no-o  @\n|  | @\nO-o  @\n|    @\no    @@\n     @\n     @\n o-o @\n|  | @\n o-O @\n   | @\n   o @@\n    @\n    @\no-o @\n|   @\no   @\n    @\n    @@\n    @\n    @\no-o @\n \\  @\no-o @\n    @\n    @@\n o  @\n |  @\n-o- @\n |  @\n o  @\n    @\n    @@\n     @\n     @\no  o @\n|  | @\no--o @\n     @\n     @@\n      @\n      @\no   o @\n \\ /  @\n  o   @\n      @\n      @@\n         @\n         @\no   o   o@\n \\ / \\ / @\n  o   o  @\n         @\n         @@\n    @\n    @\n\\ / @\n o  @\n/ \\ @\n    @\n    @@\n     @\n     @\no  o @\n|  | @\no--O @\n   | @\no--o @@\n    @\n    @\no-o @\n /  @\no-o @\n    @\n    @@\n  o-o @\n  |   @\no-O   @\n  |   @\n  o-o @\n      @\n      @@\no @\n| @\no @\n| @\no @\n  @\n  @@\no-o   @\n  |   @\n  O-o @\n  |   @\no-o   @\n      @\n      @@\n      @\n o_ / @\n/  o  @\n      @\n      @\n      @\n      @@\no O o@\n / \\ @\no---o@\n|   |@\no   o@\n     @\n     @@\no o-o o@\n o   o @\n |   | @\n o   o @\n  o-o  @\n       @\n       @@\no o o o @\n|     | @\no     o @\n \\   /  @\n  o-o   @\n        @\n        @@\no o @\n    @\n oo @\n| | @\no-o-@\n    @\n    @@\no o @\n    @\no-o @\n| | @\no-o @\n    @\n    @@\no  o @\n     @\no  o @\n|  | @\no--o @\n     @\n     @@\no--o  @\n|   | @\nO--o  @\n|   | @\no--o  @\n|     @\no     @@\n"
}

  