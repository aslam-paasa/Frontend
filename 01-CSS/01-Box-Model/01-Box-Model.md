# Understanding:

+--------------------------------------------------------------------+
|                                                                    |
|                                                                    |
|                                                                    |
|          +----------------------------------------------+          |
|          |             Padding                          |          |
|          |                                              |          |
|          |          +------------------------+          |          |
|          |          |<---  |   width     --->|          |          |
|          |          |    height              |          |          |
|          |          |      V                 |          |          |
|          |          +------------------------+          |          |
|          |                                              |          |
|  margin  |                                        border|          |
|          +----------------------------------------------+          |
|                                                                    |
|                                                                    |
|                                                                    |
+---------------------------------------------------------------------+

Most common and most misunderstood conceptL
1. Content Area
2. Padding
3. Fill Area(Content Area + Padding)
4. Border
5. Margin

Examples:
=> A building
   a. carpet area == content area
   b. walls == padding
   c. (walls and the carpet area) / built up area == fill area
   d. paint == border
   e. free space between two building blocks == margin

Check the box model for each of the elements in the developer console:
=> Background applies to the fill area
  
   Box-sizing:
   a. By default browser applies the width to the content-area and 
      default box-sizing value is content-box.
   b. We can change this to take the width of the entire box including
      border and padding by setting 'box-sizing' to 'border-box'.
   c. 