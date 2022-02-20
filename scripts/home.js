function dfa() {
    

    // DFA Skeleton

    var dfaSkel = ":+ dfa MACHINE_NAME\n{\ntitle Untitled DFA\nQ={} /*Set of states used\nS={} /* Possible transition characters\nq0= /* Starting state\nF={} /* Finishing state\n\n/* Transitions:\nd()=\nd()=\nd()=\nd()=\n}\n";

    document.getElementById("txtarea").value += dfaSkel;

} //dfa()

function nfa() {

    // NFA Skeleton

    var nfaSkel = ":+ nfa MACHINE_NAME\n{\ntitle Untitled NFA\nQ={} /*Set of states used\nS={} /* Possible transition characters (excluding epsilon)\nq0= /* Starting state\nF={} /* Finishing state\n\n/* Transitions:\nd()={}\nd()={}\nd()={}\nd()={}\n}\n";

    document.getElementById("txtarea").value += nfaSkel;


} //nfa()

function gnfa() {

 // GNFA Skeleton

 var gnfaSkel = ":+ gnfa MACHINE_NAME\n{\ntitle Untitled GNFA\nQ={qs, qf} /* Set of states used\nS={} /* Possible transition characters (excluding epsilon)\nq0=qs/* Starting state\nF={qf} /* Finishing state\n\n/* Transitions:\nqs->qf:\n}\n";

 document.getElementById("txtarea").value += gnfaSkel;

} //gnfa()

function cfg() {

// CFG Skeleton

var cfgSkel = ":+ cfg MACHINE_NAME\n{\nV={} /* Set of variables used\nS={} /* Possible terminals (excluding epsilon)\nv0= /* Starting variable\n\n/* Rules (Variable->Terminal):\n -> \n -> \\e\n}\n";

document.getElementById("txtarea").value += cfgSkel;

} //cfg()

function pda() {

// PDA Skeleton

var pdaSkel = ":+ pda MACHINE_NAME\n{\ntitle Untitled PDA\nQ={qs, qf} /* Set of states used\nS={} /* Lexicon characters (excluding epsilon)\nT={} /* Stack Characters\nq0=qs/* Starting state\nF={qf} /* Finishing state\n\n/* Transitions (State->State:Read,Pop->Push):\nqs->qf: , \n}\n";

document.getElementById("txtarea").value += pdaSkel;

} //pda()

function add() {

    document.getElementById("condoc").innerHTML += "\n\n" + document.getElementById("txtarea").value;

} //add()

function exportCondoc() {


    
}