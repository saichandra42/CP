function erase(paper,k) {
    // Change at max k cells from white to black
    let start = 0;
    let result  = 0;
    let current_length = 0;
    for(let end = 0; end < paper.length; end++) {
        let current = paper[end];
        if(current === 'B') {
            current_length++;
            
        } else {
            start =  end;
        }
    };
}


// WBWWWB
//  