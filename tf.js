/************************************************************
 *
 * Traffic Jam
 * 
 ************************************************************/

var BOARD = [
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1
]


var PIECES = [


    { size: 2,
      name: "X",
      position: -1,
      orientation: -1,
      goal: true },

    { size: 2,
      name: "A",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "B",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "C",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "D",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "E",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "F",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "G",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "H",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "I",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "J",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 2,
      name: "K",
      position: -1,
      orientation: -1,
      goal: false },

    { size: 3,
      name: "O",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 3,
      name: "P",
      position: -1,
      orientation: -1,
      goal: false },
    { size: 3,
      name: "Q",
      position: -1,
      orientation: -1,
      goal: false  },
    { size: 3,
      name: "R",
      position: -1,
      orientation: -1,
      goal: false }

]



function run () {

    console.log("TRAFFIC JAM");
    initialize_board();
    place_piece_by_name("X",2,2,0);
    place_piece_by_name("A",4,2,1);
    place_piece_by_name("P",5,1,1);
    print_board();
    move_piece("A",2);
    print_board();
    move_piece("P",2)
    print_board();
}

function initialize_board () {
    
    BOARD.forEach(function(d,i) { BOARD[i] = -1; });
}

function position (x,y) {

    return y * 6  +x;
}

function xy_position (position) {

    var x = position % 6;
    var y = (position - x) / 6;
    return [x,y];
}

function place_piece_by_name (name,x,y,orientation) {

    place_piece(piece_index(name),x,y,orientation);
}

function piece_index (name) {
    for (var i = 0; i<PIECES.length; i++) {
	if (PIECES[i].name.toLowerCase() === name.toLowerCase()) {
	    return i;
	}
    }
}
    
function place_piece (index,x,y,orientation) {

    PIECES[index].position = y*6+x;
    PIECES[index].orientation = orientation;
    var step = orientation ? 6 : 1;
    for (var i=0; i<PIECES[index].size; i++) {
	pos = PIECES[index].position + i * step;
	BOARD[pos] = index;
    }
}

function clear_piece (index) {
    var orientation = PIECES[index].orientation;
    var position = PIECES[index].position;
    var step = orientation ? 6 : 1;
    PIECES[index].position = -1;
    PIECES[index].orientation = -1;
    for (var i=0; i<PIECES[index].size; i++) {
	BOARD[position+i*step] = -1;
    }
}
    

function print_board () {

    for (var y=0; y < 6; y++) {
	row = "";
	for (var x=0; x < 6; x++) {
	    index = BOARD[y*6+x];
	    if (index < 0) {
		row += ". ";
	    } else {
		row += PIECES[index].name + " ";
	    }
	}
	console.log(row);
    }
}


function piece_range (index) {

    if (PIECES[index].orientation < 0) {
	return false;
    }

    ///console.log("piece = ",PIECES[index].name);

    var x = PIECES[index].position % 6;
    var y = (PIECES[index].position - x) / 6;

    ///console.log("x = ",x);
    ///console.log("y = ",y);
    ///console.log("orientation = ",PIECES[index].orientation);

    var mn=-1, mx=10;
    
    if (PIECES[index].orientation === 0) {
	///console.log("LR orientation");
	for (var i=x-1; i > -1; i--) {
	    ///console.log("trying position ",i);
	    if (!piece_fits(index,i,y)) {
		///console.log("no");
		mn = i+1;
		break;
	    }
	    ///console.log("yes");
	}
	if (mn < 0) {
	    mn = 0;
	}
	for (var i=x+1; i < 6-(PIECES[index].size-1); i++) {
	    ///console.log("trying position ",i);
	    if (!piece_fits(index,i,y)) {
		///console.log("no");
		mx = i-1;
		break;
	    }
	    ///console.log("yes");
	}
	if (mx > 5) {
	    mx = 5;
	}
	return [mn,mx];
    }

    if (PIECES[index].orientation === 1) {
	for (var i=y-1; i > -1; i--) {
	    if (!piece_fits(index,x,i)) {
		mn = i+1;
		break;
	    }
	}
	if (mn < 0) {
	    mn = 0;
	}
	for (var i=y+1; i < 6-(PIECES[index].size-1); i++) {
	    if (!piece_fits(index,x,i)) {
		mx = i-1;
		break;
	    }
	}
	if (mx > 5) {
	    mx = 5;
	}
	return [mn,mx];
    }
}

function piece_fits (index,x,y) {
    var step = PIECES[index].orientation ? 6 : 1;
    var init = y * 6 + x;
    for (var i=0; i<PIECES[index].size; i++) {
	var position = init + i * step
	if (BOARD[position] !== -1 && BOARD[position] !== index) {
	    return false;
	}
    }
    return true;
}


function move_piece (name,d) {

    var index = piece_index(name);
    var r = piece_range(index);
    if (PIECES[index].orientation < 0) {
	return;
    }
    var r = piece_range(index);
    var position = PIECES[index].position;
    var orientation = PIECES[index].orientation;
    var xy = xy_position(position)
    var x = xy[0], y = xy[1];
    if (orientation === 0) {
	if (x+d >= r[0] && x+d <= r[1]) {
	    clear_piece(index);
	    place_piece(index,x+d,y,orientation);
	}
    } else {
	if (y+d >= r[0] && y+d <= r[1]) {
	    clear_piece(index);
	    place_piece(index,x,y+d,orientation);
	}
    }
}

run();
