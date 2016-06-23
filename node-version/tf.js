/************************************************************
 *
 * Traffic Jam
 * 
 ************************************************************/

prompt = require("prompt");

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

var SAMPLE1 = "X23r:A24r:B25d:C36r:O43d:P64d";
var SAMPLE2 = "A21d:B31r:C51d:D61d:E42d:F63d:I34r:H45d:X23r";

var GAMES = [
    {level:"beginner-1",
     code:"A11r:B15d:C55r:O61d:P12d:Q42d:R36r:X23r"},
    {level:"beginner-2",
     code:"A11d:B42d:C53d:D35d:E55r:F16r:G46r:O41r:P62d:Q14r:X13r"},
    {level:"beginner-3",
     code:"A24r:B25d:C36r:O43d:P64d:X23r"},
    {level:"beginner-4",
     code:"A34d:B65d:O11d:P41d:Q44r:R36r:X23r"},
    {level:"beginner-5",
     code:"A11r:B61d:D15d:E55r:F56r:G63d:O41d:P12d:Q52d:R24r:X23r"},
    {level:"beginner-6",
     code:"A11r:B41d:C12r:D14r:E34d:F15d:O52d:P62d:Q43d:R46r:X23r"},
    {level:"beginner-7",
     code:"A21d:B31r:C51d:D61d:E42d:F63d:H45d:I34r:X23r"},
    {level:"beginner-8",
     code:"A41r:B32r:C52d:D33d:E43d:F14r:G54r:H15r:I35d:K16r:O61d:P45r:Q46r:X13r"},
    {level:"beginner-9",
     code:"A21d:B31r:C51r:D42d:E52r:F63d:G35d:H65d:O53d:P14d:Q24r:X13r"},
    {level:"beginner-10",
     code:"A11r:B31d:C51r:D12r:E45d:F55r:G16r:H56r:O62d:P13d:Q24r:X23r"},

    {level:"intermediate-11",
     code:"A21r:B34d:E65d:O11d:P41d:Q44r:R36r:X23r"},
    {level:"intermediate-12",
     code:"A11d:B21r:C55d:O61d:P32d:Q44r:R16r:X13r"},
    {level:"intermediate-13",
     code:"A11r:B31r:C51d:D32d:E23d:F44r:G45d:H55r:I26r:K56r:O62d:P14d:X43r"},
    {level:"intermediate-14",
     code:"A11r:B31d:C52r:D13d:E23d:F53d:G63d:H34r:I35d:J55r:K16r:X33r"},
    {level:"intermediate-15",
     code:"A21r:B41r:C12r:D32r:E34d:F44d:G55r:H26r:I46r:O52d:P62d:Q13d:R23d:X33r"},
];
	    

function run () {

    console.log("TRAFFIC JAM\n");
    initialize_board();
//    place_piece_by_name("X",2,2,0);
//    place_piece_by_name("A",4,2,1);
//    place_piece_by_name("P",5,1,1);

    process_puzzle(GAMES[GAMES.length-1].code);

    prompt.start()
    loop ()
}

function loop () {
    print_board();
    console.log("");
    if (done()) {
	console.log("CONGRATULATIONS");
	return;
    }
    /// check if done
    prompt.get(["piece", "delta"],function(err,result) {
	if (piece_index(result.piece) > -1) {
	    move_piece(result.piece,+result.delta);
	    loop();
	} else {
	    if (result.piece.trim() === "#" ||
		result.delta.trim() === "#") {
		return;
	    }
	    if (result.piece.trim() === "?" ||
		result.delta.trim() === "?") {
		solve_puzzle();
		return;
	    }
	    console.log("Unrecognized input");
	    loop();
	}
    });
}

function initialize_board () {
    
    BOARD.forEach(function(d,i) { BOARD[i] = -1; });
}

function position (x,y) {

    return y * 6  +x;
}

function xy_position (position) {

    if (position > -1) {
	var x = position % 6;
	var y = (position - x) / 6;
	return [x,y];
    }
    return 0;
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
    return -1;
}

function done () {
    var index = piece_index("X");
    var xy = xy_position(PIECES[index].position);
    ///console.log("index = ",index,"xy = ",xy);
    if (xy && xy[1] === 2) {
	// we're done if the range of the X piece
	// goes all the way to the exit!
	var r = piece_range(index);
	return r[1] === 4;
    }
    return false;
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

function place_piece_by_position (index,position,orientation) {
    PIECES[index].position = position;
    PIECES[index].orientation = orientation;
    var step = orientation ? 6 : 1;
    for (var i=0; i<PIECES[index].size; i++) {
	pos = position + i * step;
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

function clear_board () {
    for (var i=0; i<BOARD.length; i++) {
	BOARD[i] = -1
    }
    for (var i=0; i<PIECES.length; i++) {
	PIECES[i].position = -1;
	PIECES[i].orientation = -1;
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
	if (mx > 6-PIECES[index].size) {
	    mx = 6-PIECES[index].size;;
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
	if (mx > 6-PIECES[index].size) {
	    mx = 6-PIECES[index].size;
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

function process_puzzle (descr) {
    descr.split(":").forEach(function(entry) {
	if (entry.length == 4) {
	    place_piece_by_name(entry[0],
				+entry[1]-1,
				+entry[2]-1,
				entry[3]==="r" ? 0 : 1);
	}
    });
}

function solve_puzzle () {

    var q = [[board_string()]];

    var seen = {};

    while (q.length > 0) {
	///console.log(q.length);
	path = q.shift();
	current = path[0];
	if (current in seen) {
	    continue;
	}
	recreate_board(current);
	if (done()) {
	    console.log("SOLUTION:");
	    for (var i=path.length; i>0; i--) {
		recreate_board(path[i-1]);
		print_board();
		console.log("");
	    }
	    return;
	}
	seen[current] = true;
	moves = all_moves();
	moves.forEach(function(move) {
	    move_piece(move[0],move[1]);
	    q.push([board_string()].concat(path))
	    recreate_board(current); });
    }

    console.log("No solution found");
    
}

function board_string () {
    var string = "";
    PIECES
	.forEach(function(p,i) {
	    if (p.position > -1) {
		string += ("0"+i).slice(-2) + ("0"+p.position).slice(-2) + p.orientation; } });
    ///console.log(string);
    return string;
}

function recreate_board (string) {
    clear_board();
    ///console.log("string",string);
    for (var i=0; i<string.length; i+=5) {
	///console.log("i",i,"string",string.slice(i,i+5));
	place_piece_by_position(+string.slice(i,i+2),
				+string.slice(i+2,i+4),
				+string.slice(i+4,i+5));
    }
    ///print_board();
}

function all_moves () {
    moves = [];
    PIECES
	.forEach(function(p,index) {
	    ///console.log("index",index);
	    if (p.position > -1) {
		var r = piece_range(index);
		var xy = xy_position(p.position);
		var x = xy[0], y = xy[1];
		///console.log("piece",p.name,"x",x,"y",y,"orientation",p.orientation);
		///console.log("range",r);
		if (p.orientation) {
		    ///console.log("orientation D");
		    for (var i=r[0]-y; i<r[1]+1-y; i++) {
			if (i) {
			    moves.push([p.name,i]);
			}
		    }
		} else {
		    ///console.log("orientation R");
		    for (var i=r[0]-x; i<r[1]+1-x; i++) {
			if (i) {
			    moves.push([p.name,i]);
			}
		    }
		}
	    } });
    ///console.log(moves);
    return moves;
}

run();
