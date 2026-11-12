//A.
const q1a = "t";
const q2a = "2";
const q3a = ["simp", "simplification"];
const q4a = "~~t";
const q5a = "3";
const q6a = ["dn","double negation", "doublenegation"];
const q7a = "~(rvs)";
const q8a = "1,4";
const q9a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
//B.
const q10a = "p->q";
const q11a = "1";
const q12a = ["impl","materialimplification"];
const q13a = "q->r";
const q14a = "2";
const q15a = ["trans","transposition"];
const q16a = "p->r";
const q17a = "4,5";
const q18a = ["hs","hypotheticalsyllogism "];
const q19a = "p->s";
const q20a = "6,3";
const q21a = ["hs","hypotheticalsyllogism"];
//C.
const q22a = "~sv(p^q)";
const q23a = "3";
const q24a = ["dist","distribution"];
const q25a = "(pvq)v~s";
const q26a = "4";
const q27a = ["com","commutativity"];
const q28a = ["((p^q)->r)^(~s->~t)","[(p^q)->r]^(~s->~t)"];
const q29a = "1,2";
const q30a = ["conj","conjunction"];
const q31a = "rv~t";
const q32a = "6,5";
const q33a = ["cd","constructivedilemma"];
const q34a = "~tvr";
const q35a = "7";
const q36a = ["com","commutativity"];
const q37a = "t->r";
const q38a = "8";
const q39a = ["impl","materialimplification"];
//D.
const q40a = "~~av~b";
const q41a = "1";
const q42a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q43a = "~bv~~a";
const q44a = "5";
const q45a = ["com","commutativity"];
const q46a = "~~a";
const q47a = "6,2";
const q48a = ["ds", "disjunctivesyllogism"];
const q49a = "a";
const q50a = "7";
const q51a = ["dn", "doublenegation"];
const q52a = "cvd";
const q53a = "3,8";
const q54a = ["mp", "modusponens"];
const q55a = "~c";
const q56a = "4";
const q57a = ["dn", "doublenegation"];
const q58a = "d";
const q59a = "9,10";
const q60a = ["ds", "disjunctivesyllogism"];
//E.
const q61a = "av(bvc)";
const q62a = "1";
const q63a = ["assoc", "associativity"];
const q64a = "bvc";
const q65a = "6,2";
const q66a = ["ds", "disjunctivesyllogism"];
const q67a = "(b->d)^(c->d)";
const q68a = "3,4";
const q69a = ["conj", "conjuction"];
const q70a = "dvd";
const q71a = "8,7";
const q72a = ["cd","constructivedilemma"];
const q73a = "d";
const q74a = "9";
const q75a = ["tau", "tautology"];
const q76a = "e^(f^g)";
const q77a = "5";
const q78a = ["assoc", "associativity"];
const q79a = "d^(e^(f^g))";
const q80a = "10,11";
const q81a = ["conj", "conjuction"];
//F
const q82a = "~~a^~~d";
const q83a = "1";
const q84a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q85a = "~~a";
const q86a = "4";
const q87a = ["simp", "simplification"];
const q88a = "a";
const q89a = "5";
const q90a = ["dn","double negation", "doublenegation"];
const q91a = "avb";
const q92a = "6";
const q93a = ["add", "addition"];
const q94a = "~~(avb)";
const q95a = "7";
const q96a = ["dn","double negation", "doublenegation"];
const q97a = "~~c";
const q98a = "2,8";
const q99a = ["mt", "modustollens"];
const q100a = "c";
const q101a = "9";
const q102a = ["dn","double negation", "doublenegation"];
const q103a = "cvf";
const q104a = "10";
const q105a = ["add", "addition"];
const q106a = "g";
const q107a = "3,11";
const q108a = ["mp", "modusponens"];
//G.
const q109a = "~av~~b";
const q110a = "1";
const q111a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q112a = "~avb";
const q113a = "5";
const q114a = ["dn", "doublenegation"];
const q115a = "a->b";
const q116a = "6";
const q117a = ["impl","materialimplification"];
const q118a = "b->c";
const q119a = "2";
const q120a = ["impl","materialimplification"];
const q121a = "~cv~~(dve)";
const q122a = "3";
const q123a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q124a = "~cv(dve)";
const q125a = "9";
const q126a = ["dn", "doublenegation"];
const q127a = "c->(dve)";
const q128a = "10";
const q129a = ["impl","materialimplification"];
const q130a = "a->c";
const q131a = "7,8";
const q132a = ["hs","hypotheticalsyllogism"];
const q133a = "a->(dve)";
const q134a = "12,11";
const q135a = ["hs","hypotheticalsyllogism "];
const q136a = "~(dve)";
const q137a = "4";
const q138a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q139a = "~a";
const q140a = "13,14";
const q141a = ["mt", "modustollens"];
//H.
const q142a = "~(~ave)";
const q143a = "2";
const q144a = ["impl","materialimplification"];
const q145a = "~~a^~e";
const q146a = "4";
const q147a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q148a = "~~a";
const q149a = "5";
const q150a = ["simp", "simplification"];
const q151a = "a";
const q152a = "6";
const q153a = ["dn", "doublenegation"];
const q154a = "((a^b)^c)->d";
const q155a = "1";
const q156a = ["exp", "exportation"];
const q157a = "(a^(b^c))->d";
const q158a = "8";
const q159a = ["assoc", "associativity"];
const q160a = "a->((b^c)->d)";
const q161a = "9";
const q162a = ["exp", "exportation"];
const q163a = "(b^c)->d";
const q164a = "10,7";
const q165a = ["mp", "modusponens"];
const q166a = "~(b^c)";
const q167a = "11,3";
const q168a = ["mt", "modustollens"];
const q169a = "~bv~c";
const q170a = "12";
const q171a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q172a = "b->~c";
const q173a = "13";
const q174a = ["impl","materialimplification"];
//I.
const q175a = "~((a^b)v(~a^~b))";
const q176a = "1";
const q177a = ["equiv", "materialequivalence"];
const q178a = "~(a^b)^~(~a^~b)";
const q179a = "4";
const q180a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q181a = "~(~a^~b)^~(a^b)";
const q182a = "5";
const q183a = ["com","commutativity"];
const q184a = "~(~a^~b)";
const q185a = "6";
const q186a = ["simp", "simplification"];
const q187a = "~~av~~b";
const q188a = "7";
const q189a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q190a = "av~~b";
const q191a = "8";
const q192a = ["dn", "doublenegation"];
const q193a = "avb";
const q194a = "9";
const q195a = ["dn", "doublenegation"];
const q196a = "(a->c)^(b->c)";
const q197a = "2,3";
const q198a = ["conj", "conjuction"];
const q199a = "cvc";
const q200a = "11,10";
const q201a = ["cd","constructivedilemma"];
const q202a = "c";
const q203a = "12";
const q204a = ["tau", "tautology"];
//J.
const q205a = "(pvq)->s";
const q206a = "1";
const q207a = ["trans", "transposition"];
const q208a = "~sv~~r";
const q209a = "2";
const q210a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q211a = "~svr";
const q212a = "8";
const q213a = ["dn", "doublenegation"];
const q214a = "s->r";
const q215a = "9";
const q216a = ["impl","materialimplification"];
const q217a = "(pvq)->r";
const q218a = "7,10";
const q219a = ["hs","hypotheticalsyllogism"];
const q220a = "~~pv~~q";
const q221a = "3";
const q222a = ["dm","demorgan'stheorem","demorgantheorem","demorganstheorem"];
const q223a = "pv~~q"
const q224a = "12";
const q225a = ["dn", "doublenegation"];
const q226a = "pvq";
const q227a = "13";
const q228a = ["dn", "doublenegation"];
const q229a = "r";
const q230a = "11,14";
const q231a = ["mp", "modusponens"];
const q232a = "r->t";
const q233a = "4";
const q234a = ["trans", "transposition"];
const q235a = "t";
const q236a = "16,15";
const q237a = ["mp", "modusponens"];
const q238a = "uvw";
const q239a = "5,17";
const q240a = ["mp", "modusponens"];
const q241a = "w";
const q242a = "18,6";
const q243a = ["ds", "disjunctivesyllogism"];

let correct = 0;





document.getElementById("submit2").disabled = true
document.getElementById("submit3").disabled = true
document.getElementById("submit5").disabled = true
document.getElementById("submit6").disabled = true
document.getElementById("submit7").disabled = true
document.getElementById("submit9").disabled = true
document.getElementById("submit10").disabled = true
document.getElementById("submit11").disabled = true
document.getElementById("submit12").disabled = true
document.getElementById("submit13").disabled = true




//A.
document.getElementById("submit1").onclick = function () {
    const ans1 = document.getElementById("q1").value.trim().toLowerCase();
    const ans2 = document.getElementById("q2").value.trim().toLowerCase();
    const ans3 = document.getElementById("q3").value.trim().toLowerCase();

    if (ans1 === q1a) {
        correct += 1;
        document.getElementById("q1").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q1").style.backgroundColor = "red";

    }
    if (ans2 === q2a) {
        correct += 1;
        document.getElementById("q2").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q2").style.backgroundColor = "red";
    }
    if (q3a.includes(ans3)) {
        correct += 1;
        document.getElementById("q3").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q3").style.backgroundColor = "red";
    }
    document.getElementById("q1").disabled = true
    document.getElementById("q2").disabled = true
    document.getElementById("q3").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
    document.getElementById("submit1").disabled = true;
    document.getElementById("submit2").disabled = false;

};
document.getElementById("submit2").onclick = function () {

    const ans4 = document.getElementById("q4").value.trim().toLowerCase();
    const newans4 = ans4.replace(/\s/g, '')
    const ans5 = document.getElementById("q5").value.trim().toLowerCase();
    const ans6 = document.getElementById("q6").value.trim().toLowerCase();

    if (newans4 === q4a) {
        correct += 1;
        document.getElementById("q4").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q4").style.backgroundColor = "red";
    }
    if (ans5 === q5a) {
        correct += 1;
        document.getElementById("q5").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q5").style.backgroundColor = "red";
    }
    if (q6a.includes(ans6)) {
        correct += 1;
        document.getElementById("q6").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q6").style.backgroundColor = "red";
    }
    document.getElementById("q4").disabled = true
    document.getElementById("q5").disabled = true
    document.getElementById("q6").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
    document.getElementById("submit2").disabled = true;
    document.getElementById("submit3").disabled = false

};
document.getElementById("submit3").onclick = function () {
    const ans7 = document.getElementById("q7").value.trim().toLowerCase();
    const newans7 = ans7.replace(/\s/g, '')
    const ans8 = document.getElementById("q8").value.trim().toLowerCase();
    const ans9 = document.getElementById("q9").value.trim().toLowerCase();
    const newans9 = ans9.replace(/\s/g, '')

    if (newans7 === q7a) {
        correct += 1;
        document.getElementById("q7").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q7").style.backgroundColor = "red";
    }
    if (ans8 === q8a) {
        correct += 1;
        document.getElementById("q8").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q8").style.backgroundColor = "red";
    }
    if (q9a.includes(newans9)) {
        correct += 1;
        document.getElementById("q9").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q9").style.backgroundColor = "red";
    }
    document.getElementById("q7").disabled = true
    document.getElementById("q8").disabled = true
    document.getElementById("q9").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
    document.getElementById("submit3").disabled = true;
};
//B.
document.getElementById("submit4").onclick = function () {
    const ans10 = document.getElementById("q10").value.trim().toLowerCase()
    const ans11 = document.getElementById("q11").value.trim().toLowerCase()
    const ans12 = document.getElementById("q12").value.trim().toLowerCase()
    const newans12 = ans12.replace(/\s/g, '')

    if (ans10 === q10a) {
        correct += 1
        document.getElementById("q10").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q10").style.backgroundColor = "red";
    }
    if (ans11 === q11a) {
        correct += 1
        document.getElementById("q11").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q11").style.backgroundColor = "red";
    }
    if (q12a.includes(newans12)) {
        correct += 1
        document.getElementById("q12").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q12").style.backgroundColor = "red";
    }

    document.getElementById("q10").disabled = true
    document.getElementById("q11").disabled = true
    document.getElementById("q12").disabled = true    
    document.getElementById("submit4").disabled = true
    document.getElementById("submit5").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit5").onclick = function () {
    const ans13 = document.getElementById("q13").value.trim().toLowerCase()
    const ans14 = document.getElementById("q14").value.trim().toLowerCase()
    const ans15 = document.getElementById("q15").value.trim().toLowerCase()
    const newans15 = ans15.replace(/\s/g, '')

    if (ans13 === q13a) {
        correct += 1
        document.getElementById("q13").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q13").style.backgroundColor = "red";
    }
    if (ans14 === q14a) {
        correct += 1
        document.getElementById("q14").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q14").style.backgroundColor = "red"
    }
    if (q15a.includes(newans15)) {
        correct += 1
        document.getElementById("q15").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q15").style.backgroundColor = "red";
    }
    document.getElementById("q13").disabled = true
    document.getElementById("q14").disabled = true
    document.getElementById("q15").disabled = true
    document.getElementById("submit5").disabled = true
    document.getElementById("submit6").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;

}
document.getElementById("submit6").onclick = function () {
    const ans16 = document.getElementById("q16").value.trim().toLowerCase()
    const ans17 = document.getElementById("q17").value.trim().toLowerCase()
    const ans18 = document.getElementById("q18").value.trim().toLowerCase()
    const newans18 = ans18.replace(/\s/g, '')

    if (ans16 === q16a) {
        correct += 1
        document.getElementById("q16").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q16").style.backgroundColor = "red";
    }
    if (ans17 === q17a) {
        correct += 1
        document.getElementById("q17").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q17").style.backgroundColor = "red";
    }
    if (q18a.includes(newans18)) {
        correct += 1
        document.getElementById("q18").style.backgroundColor = "limegreen";
    }
    else {
        document.getElementById("q18").style.backgroundColor = "red";
    }

    document.getElementById("q16").disabled = true
    document.getElementById("q17").disabled = true
    document.getElementById("q18").disabled = true
    document.getElementById("submit6").disabled = true
    document.getElementById("submit7").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
}
document.getElementById("submit7").onclick = function () {
    const ans19 = document.getElementById("q19").value.trim().toLowerCase()
    const ans20 = document.getElementById("q20").value.trim().toLowerCase()
    const ans21 = document.getElementById("q21").value.trim().toLowerCase()
    const newans21 = ans21.replace(/\s/g, '')

    if (ans19 === q19a) {
        correct += 1
        document.getElementById("q19").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q19").style.backgroundColor = "red"
    }
    if (ans20 === q20a) {
        correct += 1
        document.getElementById("q20").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q20").style.backgroundColor = "red"
    }
    if (q21a.includes(newans21)) {
        correct += 1
        document.getElementById("q21").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q21").style.backgroundColor = "red"
    }
    document.getElementById("q19").disabled = true
    document.getElementById("q20").disabled = true
    document.getElementById("q21").disabled = true
    document.getElementById("submit7").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};

//C.
document.getElementById("submit8").onclick = function () {
    const ans22 = document.getElementById("q22").value.trim().toLowerCase()
    const ans23 = document.getElementById("q23").value.trim().toLowerCase()
    const ans24 = document.getElementById("q24").value.trim().toLowerCase()
    const newans24 = ans24.replace(/\s/g, '')

    if (ans22 === q22a) {
        correct += 1
        document.getElementById("q22").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q22").style.backgroundColor = "red"
    }
    if (ans23 === q23a) {
        correct += 1
        document.getElementById("q23").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q23").style.backgroundColor = "red"
    }
    if (q24a.includes(newans24)) {
        correct += 1
        document.getElementById("q24").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q24").style.backgroundColor = "red"
    }
    document.getElementById("q22").disabled = true
    document.getElementById("q23").disabled = true
    document.getElementById("q24").disabled = true
    document.getElementById("submit8").disabled = true
    document.getElementById("submit9").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit9").onclick = function () {
    const ans25 = document.getElementById("q25").value.trim().toLowerCase()
    const ans26 = document.getElementById("q26").value.trim().toLowerCase()
    const ans27 = document.getElementById("q27").value.trim().toLowerCase()
    const newans27 = ans27.replace(/\s/g, '')

    if (ans25 === q25a) {
        correct += 1
        document.getElementById("q25").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q25").style.backgroundColor = "red"
    }
    if (ans26 === q26a) {
        correct += 1
        document.getElementById("q26").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q26").style.backgroundColor = "red"
    }
    if (q27a.includes(newans27)) {
        correct += 1
        document.getElementById("q27").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q27").style.backgroundColor = "red"
    }
    document.getElementById("q25").disabled = true
    document.getElementById("q26").disabled = true
    document.getElementById("q27").disabled = true
    document.getElementById("submit9").disabled = true
    document.getElementById("submit10").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit10").onclick = function () {
    const ans28 = document.getElementById("q28").value.trim().toLowerCase()
    const newans28 = ans28.replace(/\s/g, '')
    const ans29 = document.getElementById("q29").value.trim().toLowerCase()
    const ans30 = document.getElementById("q30").value.trim().toLowerCase()
    const newans30 = ans30.replace(/\s/g, '')

    if (q28a.includes(newans28)) {
        correct += 1
        document.getElementById("q28").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q28").style.backgroundColor = "red"
    }
    if (ans29 === q29a) {
        correct += 1
        document.getElementById("q29").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q29").style.backgroundColor = "red"
    }
    if (q30a.includes(newans30)) {
        correct += 1
        document.getElementById("q30").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q30").style.backgroundColor = "red"
    }
    document.getElementById("q28").disabled = true
    document.getElementById("q29").disabled = true
    document.getElementById("q30").disabled = true
    document.getElementById("submit10").disabled = true
    document.getElementById("submit11").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
}
document.getElementById("submit11").onclick = function () {
    const ans31 = document.getElementById("q31").value.trim().toLowerCase()
    const ans32 = document.getElementById("q32").value.trim().toLowerCase()
    const ans33 = document.getElementById("q33").value.trim().toLowerCase()
    const newans33 = ans33.replace(/\s/g, '')

    if (ans31 === q31a) {
        correct += 1
        document.getElementById("q31").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q31").style.backgroundColor = "red"
    }
    if (ans32 === q32a) {
        correct += 1
        document.getElementById("q32").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q32").style.backgroundColor = "red"
    }
    if (q33a.includes(newans33)) {
        correct += 1
        document.getElementById("q33").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q33").style.backgroundColor = "red"
    }
    document.getElementById("q31").disabled = true
    document.getElementById("q32").disabled = true
    document.getElementById("q33").disabled = true
    document.getElementById("submit11").disabled = true
    document.getElementById("submit12").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
}
document.getElementById("submit12").onclick = function () {
    const ans34 = document.getElementById("q34").value.trim().toLowerCase()
    const ans35 = document.getElementById("q35").value.trim().toLowerCase()
    const ans36 = document.getElementById("q36").value.trim().toLowerCase()
    const newans36 = ans36.replace(/\s/g, '')

    if (ans34 === q34a) {
        correct += 1
        document.getElementById("q34").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q34").style.backgroundColor = "red"
    }
    if (ans35 === q35a) {
        correct += 1
        document.getElementById("q35").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q35").style.backgroundColor = "red"
    }
    if (q36a.includes(newans36)) {
        correct += 1
        document.getElementById("q36").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q36").style.backgroundColor = "red"
    }
    document.getElementById("q34").disabled = true
    document.getElementById("q35").disabled = true
    document.getElementById("q36").disabled = true
    document.getElementById("submit12").disabled = true
    document.getElementById("submit13").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit13").onclick = function () {
    const ans37 = document.getElementById("q37").value.trim().toLowerCase()
    const ans38 = document.getElementById("q38").value.trim().toLowerCase()
    const ans39 = document.getElementById("q39").value.trim().toLowerCase()
    const newans39 = ans39.replace(/\s/g, '')

    if (ans37 === q37a) {
        correct += 1
        document.getElementById("q37").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q37").style.backgroundColor = "red"
    }
    if (ans38 === q38a) {
        correct += 1
        document.getElementById("q38").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q38").style.backgroundColor = "red"
    }
    if (q39a.includes(newans39)) {
        correct += 1
        document.getElementById("q39").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q39").style.backgroundColor = "red"
    }
    document.getElementById("q37").disabled = true
    document.getElementById("q38").disabled = true
    document.getElementById("q39").disabled = true
    document.getElementById("submit13").disabled = true
    document.getElementById("submit14").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit14").onclick = function () {
    const ans40 = document.getElementById("q40").value.trim().toLowerCase()
    const ans41 = document.getElementById("q41").value.trim().toLowerCase()
    const ans42 = document.getElementById("q42").value.trim().toLowerCase()
    const newans42 = ans42.replace(/\s/g, '')

    if (ans40 === q40a) {
        correct += 1
        document.getElementById("q40").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q40").style.backgroundColor = "red"
    }
    if (ans41 === q41a) {
        correct += 1
        document.getElementById("q41").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q41").style.backgroundColor = "red"
    }
    if (q42a.includes(newans42)) {
        correct += 1
        document.getElementById("q42").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q42").style.backgroundColor = "red"
    }
    document.getElementById("q40").disabled = true
    document.getElementById("q41").disabled = true
    document.getElementById("q42").disabled = true
    document.getElementById("submit14").disabled = true
    document.getElementById("submit15").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit15").onclick = function () {
    const ans43 = document.getElementById("q43").value.trim().toLowerCase()
    const ans44 = document.getElementById("q44").value.trim().toLowerCase()
    const ans45 = document.getElementById("q45").value.trim().toLowerCase()
    const newans45 = ans45.replace(/\s/g, '')

    if (ans43 === q43a) {
        correct += 1
        document.getElementById("q43").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q43").style.backgroundColor = "red"
    }
    if (ans44 === q44a) {
        correct += 1
        document.getElementById("q44").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q44").style.backgroundColor = "red"
    }
    if (q45a.includes(newans45)) {
        correct += 1
        document.getElementById("q45").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q45").style.backgroundColor = "red"
    }
    document.getElementById("q43").disabled = true
    document.getElementById("q44").disabled = true
    document.getElementById("q45").disabled = true
    document.getElementById("submit15").disabled = true
    document.getElementById("submit16").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit16").onclick = function () {
    const ans46 = document.getElementById("q46").value.trim().toLowerCase()
    const ans47 = document.getElementById("q47").value.trim().toLowerCase()
    const ans48 = document.getElementById("q48").value.trim().toLowerCase()
    const newans48 = ans48.replace(/\s/g, '')

    if (ans46 === q46a) {
        correct += 1
        document.getElementById("q46").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q46").style.backgroundColor = "red"
    }
    if (ans47 === q47a) {
        correct += 1
        document.getElementById("q47").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q47").style.backgroundColor = "red"
    }
    if (q48a.includes(newans48)) {
        correct += 1
        document.getElementById("q48").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q48").style.backgroundColor = "red"
    }
    document.getElementById("q46").disabled = true
    document.getElementById("q47").disabled = true
    document.getElementById("q48").disabled = true
    document.getElementById("submit16").disabled = true
    document.getElementById("submit17").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit17").onclick = function () {
    const ans46 = document.getElementById("q46").value.trim().toLowerCase()
    const ans47 = document.getElementById("q47").value.trim().toLowerCase()
    const ans48 = document.getElementById("q48").value.trim().toLowerCase()
    const newans48 = ans48.replace(/\s/g, '')

    if (ans46 === q46a) {
        correct += 1
        document.getElementById("q46").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q46").style.backgroundColor = "red"
    }
    if (ans47 === q47a) {
        correct += 1
        document.getElementById("q47").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q47").style.backgroundColor = "red"
    }
    if (q48a.includes(newans48)) {
        correct += 1
        document.getElementById("q48").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q48").style.backgroundColor = "red"
    }
    document.getElementById("q46").disabled = true
    document.getElementById("q47").disabled = true
    document.getElementById("q48").disabled = true
    document.getElementById("submit17").disabled = true
    document.getElementById("score").textContent = 'Score: ' + correct;
};
//D.
document.getElementById("submit18").onclick = function () {
    const ans46 = document.getElementById("q46").value.trim().toLowerCase()
    const ans47 = document.getElementById("q47").value.trim().toLowerCase()
    const ans48 = document.getElementById("q48").value.trim().toLowerCase()
    const newans48 = ans48.replace(/\s/g, '')

    if (ans46 === q46a) {
        correct += 1
        document.getElementById("q46").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q46").style.backgroundColor = "red"
    }
    if (ans47 === q47a) {
        correct += 1
        document.getElementById("q47").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q47").style.backgroundColor = "red"
    }
    if (ans48 === q48a) {
        correct += 1
        document.getElementById("q48").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q48").style.backgroundColor = "red"
    }
    document.getElementById("q46").disabled = true
    document.getElementById("q47").disabled = true
    document.getElementById("q48").disabled = true
    document.getElementById("submit18").disabled = true
    document.getElementById("submit19").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};
document.getElementById("submit19").onclick = function () {
    const ans49 = document.getElementById("q49").value.trim().toLowerCase()
    const ans50 = document.getElementById("q47").value.trim().toLowerCase()
    const ans48 = document.getElementById("q48").value.trim().toLowerCase()
    const newans48 = ans48.replace(/\s/g, '')

    if (ans46 === q46a) {
        correct += 1
        document.getElementById("q46").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q46").style.backgroundColor = "red"
    }
    if (ans47 === q47a) {
        correct += 1
        document.getElementById("q47").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q47").style.backgroundColor = "red"
    }
    if (ans48 === q48a) {
        correct += 1
        document.getElementById("q48").style.backgroundColor = "limegreen"
    }
    else {
        document.getElementById("q48").style.backgroundColor = "red"
    }
    document.getElementById("q46").disabled = true
    document.getElementById("q47").disabled = true
    document.getElementById("q48").disabled = true
    document.getElementById("submit18").disabled = true
    document.getElementById("submit19").disabled = false
    document.getElementById("score").textContent = 'Score: ' + correct;
};