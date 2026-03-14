/* Loop to create 6 rows of a pattern (from i=0 to i=5) */
for(let i = 0; i < 6; i++) {
    let str = "";  /* Initialize empty string for current row to build the pattern */
    
    // Inner loop: number of elements in each row = i+1
    for(let j = 1; j <= i + 1; j++) {
        /* Calculate and append either 0 or 1 to the string based on the sum of i and j */
        /* (i + j) % 2 determines the value 0,1*/
        /* This creates an alternating pattern based on row and column position */
        str += (i + j) % 2 + ' ';
    }
    
    console.log(str);  /* Print the completed row */
}
