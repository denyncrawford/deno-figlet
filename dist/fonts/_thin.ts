
  export default {
  "name": "thin",
  "font": "flf2a$ 6 5 8 -1 12\r\nBased on a lowercase font posted by robert@cs.caltech.edu\r\nFigletized by Wendell Hicken 11/93 (whicken@parasoft.com)\r\nExplanation of first line:\r\nflf2 - \"magic number\" for file identification\r\na    - should always be `a', for now\r\n$    - the \"hardblank\" -- prints as a blank, but can't be smushed\r\n6    - height of a character\r\n5    - height of a character, not including descenders\r\n8    - max line length (excluding comment lines) + a fudge factor\r\n-1   - default smushmode for this font (like \"-m 15\" on command line)\r\n12   - number of comment lines\r\n\r\n    @\r\n    @\r\n    @\r\n    @\r\n    @\r\n    @@\r\n @\r\n|@\r\n|@\r\n @\r\no@\r\n @@\r\n   @\r\n| |@\r\n` `@\r\n   @\r\n   @\r\n   @@\r\n     @\r\n . . @\r\n-+-+-@\r\n-+-+-@\r\n ` ` @\r\n     @@\r\n  ,  @\r\n,-|-.@\r\n`-|-.@\r\n  | |@\r\n`-|-'@\r\n  `  @@\r\n    @\r\no  /@\r\n  / @\r\n /  @\r\n/  o@\r\n    @@\r\n     @\r\n     @\r\n ,-. @\r\n |_|_@\r\n   | @\r\n     @@\r\n  @\r\n |@\r\n' @\r\n  @\r\n  @\r\n  @@\r\n  @\r\n /@\r\n| @\r\n| @\r\n| @\r\n \\@@\r\n  @\r\n\\ @\r\n |@\r\n |@\r\n |@\r\n/ @@\r\n   @\r\n   @\r\n.|.@\r\n-*-@\r\n'|`@\r\n   @@\r\n    @\r\n    @\r\n |  @\r\n-+- @\r\n |  @\r\n    @@\r\n    @\r\n    @\r\n    @\r\n    @\r\n |  @\r\n'   @@\r\n   @\r\n   @\r\n   @\r\n---@\r\n   @\r\n   @@\r\n @\r\n @\r\n @\r\n @\r\no@\r\n @@\r\n    @\r\n   /@\r\n  / @\r\n /  @\r\n/   @\r\n    @@\r\n    @\r\n,--.@\r\n|  |@\r\n|  |@\r\n`--'@\r\n    @@\r\n   @\r\n '|@\r\n  |@\r\n  |@\r\n  `@\r\n   @@\r\n    @\r\n,--.@\r\n,--'@\r\n|   @\r\n`--'@\r\n    @@\r\n    @\r\n,--.@\r\n  -|@\r\n   |@\r\n`--'@\r\n    @@\r\n    @\r\n|  |@\r\n`--|@\r\n   |@\r\n   `@\r\n    @@\r\n    @\r\n---.@\r\n`--.@\r\n   |@\r\n`--'@\r\n    @@\r\n    @\r\n,--.@\r\n|--.@\r\n|  |@\r\n`--'@\r\n    @@\r\n    @\r\n---.@\r\n   /@\r\n  | @\r\n  | @\r\n    @@\r\n    @\r\n,--.@\r\n,--.@\r\n|  |@\r\n`--'@\r\n    @@\r\n    @\r\n,--.@\r\n`__|@\r\n   |@\r\n   '@\r\n    @@\r\n @\r\n @\r\no@\r\n @\r\no@\r\n @@\r\n  @\r\n  @\r\n o@\r\n  @\r\n |@\r\n' @@\r\n  @\r\n /@\r\n/ @\r\n\\ @\r\n \\@\r\n  @@\r\n   @\r\n   @\r\n---@\r\n---@\r\n   @\r\n   @@\r\n  @\r\n\\ @\r\n \\@\r\n /@\r\n/ @\r\n  @@\r\n     @\r\n,---.@\r\n  ,-'@\r\n  |  @\r\n  o  @\r\n     @@\r\n     @\r\n,---.@\r\n| o_/@\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n,---.@\r\n|---|@\r\n|   |@\r\n`   '@\r\n     @@\r\n     @\r\n,---.@\r\n|---.@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n,---.@\r\n|    @\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n,--. @\r\n|   |@\r\n|   |@\r\n`--' @\r\n     @@\r\n     @\r\n,---.@\r\n|--- @\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n,---.@\r\n|__. @\r\n|    @\r\n`    @\r\n     @@\r\n     @\r\n,---.@\r\n|  _.@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n|   |@\r\n|---|@\r\n|   |@\r\n`   '@\r\n     @@\r\n @\r\n|@\r\n|@\r\n|@\r\n`@\r\n @@\r\n     @\r\n    |@\r\n    |@\r\n    |@\r\n`---'@\r\n     @@\r\n     @\r\n|   /@\r\n|__/ @\r\n|  \\ @\r\n`   `@\r\n     @@\r\n     @\r\n|    @\r\n|    @\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n,-.-.@\r\n| | |@\r\n| | |@\r\n` ' '@\r\n     @@\r\n     @\r\n,   .@\r\n|\\  |@\r\n| \\ |@\r\n`  `'@\r\n     @@\r\n     @\r\n,---.@\r\n|   |@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n,---.@\r\n|---'@\r\n|    @\r\n`    @\r\n     @@\r\n     @\r\n,---.@\r\n|   |@\r\n|   |@\r\n`---\\@\r\n     @@\r\n     @\r\n,---.@\r\n|---'@\r\n|  \\ @\r\n`   `@\r\n     @@\r\n     @\r\n,---.@\r\n`---.@\r\n    |@\r\n`---'@\r\n     @@\r\n     @\r\n--.--@\r\n  |  @\r\n  |  @\r\n  `  @\r\n     @@\r\n     @\r\n.   .@\r\n|   |@\r\n|   |@\r\n`---'@\r\n     @@\r\n      @\r\n.    ,@\r\n|    |@\r\n \\  / @\r\n  `'  @\r\n      @@\r\n     @\r\n. . .@\r\n| | |@\r\n| | |@\r\n`-'-'@\r\n     @@\r\n    @\r\n.  ,@\r\n >< @\r\n|  |@\r\n'  `@\r\n    @@\r\n     @\r\n,   .@\r\n|   |@\r\n`---'@\r\n  |  @\r\n  `  @@\r\n     @\r\n,---,@\r\n .-' @\r\n|    @\r\n`---'@\r\n     @@\r\n  @\r\n,-@\r\n| @\r\n: @\r\n| @\r\n`-@@\r\n    @\r\n\\   @\r\n \\  @\r\n  \\ @\r\n   \\@\r\n    @@\r\n  @\r\n-.@\r\n |@\r\n :@\r\n |@\r\n-'@@\r\n   @\r\n . @\r\n/ \\@\r\n   @\r\n   @\r\n   @@\r\n   @\r\n   @\r\n   @\r\n   @\r\n   @\r\n---@@\r\n  @\r\n| @\r\n `@\r\n  @\r\n  @\r\n  @@\r\n     @\r\n     @\r\n,---.@\r\n,---|@\r\n`---^@\r\n     @@\r\n     @\r\n|    @\r\n|---.@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n    |@\r\n,---|@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n|---'@\r\n`---'@\r\n     @@\r\n     @\r\n,---.@\r\n|__. @\r\n|    @\r\n`    @\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n|   |@\r\n`---|@\r\n`---'@@\r\n     @\r\n|    @\r\n|---.@\r\n|   |@\r\n`   '@\r\n     @@\r\n @\r\no@\r\n.@\r\n|@\r\n`@\r\n @@\r\n     @\r\n    o@\r\n    .@\r\n    |@\r\n    |@\r\n`---'@@\r\n     @\r\n|    @\r\n|__/ @\r\n|  \\ @\r\n`   `@\r\n     @@\r\n     @\r\n|    @\r\n|    @\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n     @\r\n,-.-.@\r\n| | |@\r\n` ' '@\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n|   |@\r\n`   '@\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n|   |@\r\n|---'@\r\n|    @@\r\n     @\r\n     @\r\n,---.@\r\n|   |@\r\n`---|@\r\n    |@@\r\n     @\r\n     @\r\n,---.@\r\n|    @\r\n`    @\r\n     @@\r\n     @\r\n     @\r\n,---.@\r\n`---.@\r\n`---'@\r\n     @@\r\n     @\r\n|    @\r\n|--- @\r\n|    @\r\n`---'@\r\n     @@\r\n     @\r\n     @\r\n.   .@\r\n|   |@\r\n`---'@\r\n     @@\r\n      @\r\n      @\r\n.    ,@\r\n \\  / @\r\n  `'  @\r\n      @@\r\n     @\r\n     @\r\n. . .@\r\n| | |@\r\n`-'-'@\r\n     @@\r\n    @\r\n    @\r\n.  ,@\r\n >< @\r\n'  `@\r\n    @@\r\n     @\r\n     @\r\n,   .@\r\n|   |@\r\n`---|@\r\n`---'@@\r\n     @\r\n     @\r\n,---,@\r\n .-' @\r\n'---'@\r\n     @@\r\n   @\r\n ,-@\r\n | @\r\n-: @\r\n | @\r\n `-@@\r\n @\r\n|@\r\n|@\r\n|@\r\n|@\r\n @@\r\n   @\r\n-. @\r\n | @\r\n :-@\r\n | @\r\n-' @@\r\n     @\r\n _   @\r\n/ \\_/@\r\n     @\r\n     @\r\n     @@\r\n o o @\r\n,---.@\r\n|---|@\r\n|   |@\r\n`   '@\r\n     @@\r\n o o @\r\n,---.@\r\n|   |@\r\n|   |@\r\n`---'@\r\n     @@\r\n o o @\r\n.   .@\r\n|   |@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n o o @\r\n,---.@\r\n,---|@\r\n`---^@\r\n     @@\r\n     @\r\n o o @\r\n,---.@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n o o @\r\n.   .@\r\n|   |@\r\n`---'@\r\n     @@\r\n     @\r\n,---.@\r\n|---.@\r\n|   |@\r\n|---'@\r\n|    @@\r\n"
}

  