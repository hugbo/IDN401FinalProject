///////////////////////
///////DATA FILE///////
///////////////////////

// Array containing data concerning exam-table setup (with seat constraint)
var dataMatrixWithConstraints = new Array(2);
// Array containing data concerning exam-table setup (without seat constraint)
var dataMatrixWithoutSeats = new Array(2);
// Array containing data conecerning exam-table setup (solution of University)
var dataMatrixUniversity = new Array(2);
// Array containing data conecerning exam-table setup (solution with rest)
var dataMatrixRestEPlusTwo = new Array(2);
// Array containing data conecerning exam-table setup (solution with rest)
var dataMatrixRestEPlusThree = new Array(2);
// Array containing data conecerning exam-table setup (solution with rest)
var dataMatrixRestEPlusFour = new Array(2);
// Array containing data concerning exam-table setup (solution for greater
// number of students earlier in the exam table)
var dataMatrixStudents = new Array(2);

// First lines in arrays. Contain courses in exam-table
dataMatrixWithConstraints[1] = ["VEL601G","HBV401G","STA202G",
"EFN205G","LEF406G","EFN214G","JAR418G","FER603M",
"RAF403G","BYG603G","TOL203F","IDN209F","JAR253F","LIF412M","LEF617M","UMV213F",
"LAN203G","STA405G","STA209G","TOL203G","UAU214M","VEL202G","LIF401G","LAN604M",
"EDL403G","BYG201G","TOL401G","JAR211G","JAR417G","RAF401G","RAF616M","STA403M",
"EFN410G","IDN403G","REI202M","LIF201G","REI201G","STA207G","STA401G","HBV601G",
"LIF633G","FER409G","LIF227F","FER210F","STA205G","IDN603G","JED201G","LIF635G",
"EDL402G","EFN406G","BYG401G","TOV602M","STA203G","MAS201F","VEL218F","JAR617G",
"LIF410G","UAU206M","LAN205G","LIF243F","RAF601G","EDL204G","EFN404G","BYG601G",
"IDN401G","LIF214G","EDL612M","VEL402G","HBV201G","JAR202G","LIF615M","RAF201G",
"LEF616M","UMV203G","TOL202M","LAN219G","LAN410G","LAN209F","RAF402G","EDL401G",
"EFN202G","TOL403G","JAR415G","JAR212G","LIF403G","FER208G","UMV203M","HBV203F",
"STA418M","EDL201G","EFN207G","EDL402M","EDL206G","BYG202M","BYG203M","VEL401G",
"IDN402G","JAR619G","LIF215G","TOV201G","EFN208G","HBV402G","JAR611G","LIF614M",
"LAN401G","FER609G","FER211F","RAF404G","STA411G","EDL205G","EFN408G","UMV201G",
"BYG201M","VEL201G","TOL203M","VEL215F","EFN612M","VEL405G","EDL203G"];

dataMatrixWithoutSeats[1] = ["VEL601G","HBV401G","STA202G","EFN205G","LEF406G",
"EFN214G","JAR418G","FER603M","RAF403G","BYG603G","TOL203F","IDN209F","JAR253F",
"LIF412M","LEF617M","UMV213F","LAN203G","STA405G","STA209G","TOL203G","UAU214M",
"VEL202G","LIF401G","LAN604M","EDL403G","BYG201G","TOL401G","JAR211G","JAR417G",
"RAF401G","RAF616M","STA403M","EFN410G","IDN403G","REI202M","LIF201G","REI201G",
"STA207G","STA401G","HBV601G","LIF633G","FER409G","LIF227F","FER210F","STA205G",
"IDN603G","JED201G","LIF635G","EDL402G","EFN406G","BYG401G","TOV602M","STA203G",
"MAS201F","VEL218F","JAR617G","LIF410G","UAU206M","LAN205G","LIF243F","RAF601G",
"EDL204G","EFN404G","BYG601G","IDN401G","LIF214G","EDL612M","VEL402G","HBV201G",
"JAR202G","LIF615M","RAF201G","LEF616M","UMV203G","TOL202M","LAN219G","LAN410G",
"LAN209F","RAF402G","EDL401G","EFN202G","TOL403G","JAR415G","JAR212G","LIF403G",
"FER208G","UMV203M","HBV203F","STA418M","EDL201G","EFN207G","EDL402M","EDL206G",
"BYG202M","BYG203M","VEL401G","IDN402G","JAR619G","LIF215G","TOV201G","EFN208G",
"HBV402G","JAR611G","LIF614M","LAN401G","FER609G","FER211F","RAF404G","STA411G",
"EDL205G","EFN408G","UMV201G","BYG201M","VEL201G","TOL203M","VEL215F","EFN612M",
"VEL405G","EDL203G"];

dataMatrixUniversity[1] = ["EFN205G","EFN214G","HBV401G","LEF406G","STA202G",
"VEL601G","BYG603G","FER603M","JAR418G","RAF403G","IDN209F","JAR253F","LEF617M",
"LIF412M","TOL203F","UMV213F","LAN203G","STA209G","STA405G","TOL203G","UAU214M",
"BYG201G","EDL403G","LAN604M","LIF401G","VEL202G","EFN410G","JAR211G","JAR417G",
"RAF401G","RAF616M","STA403M","TOL401G","IDN403G","LIF201G","REI202M","REI201G",
"STA207G","STA401G","FER210F","FER409G","HBV601G","LIF227F","LIF633G","STA205G",
"BYG401G","EDL402G","EFN406G","IDN603G","JED201G","LIF635G","MAS201F","STA203G",
"TOV602M","BYG601G","EDL204G","EFN404G","JAR617G","LAN205G","LIF243F","LIF410G",
"RAF601G","UAU206M","VEL218F","EDL612M","IDN401G","LIF214G","HBV201G","JAR202G",
"LEF616M","LIF615M","RAF201G","UMV203G","VEL402G","EDL401G","EFN202G","LAN209F",
"LAN219G","LAN410G","RAF402G","TOL202M","FER208G","JAR212G","JAR415G","LIF403G",
"TOL403G","UMV203M","BYG202M","BYG203M","EDL201G","EDL206G","EDL402M","EFN207G",
"HBV203F","STA418M","EFN208G","IDN402G","JAR619G","LIF215G","TOV201G","VEL401G",
"BYG201M","EDL205G","EFN408G","FER211F","FER609G","HBV402G","JAR611G","LAN401G",
"LIF614M","RAF404G","STA411G","UMV201G","EFN612M","TOL203M","VEL201G","VEL215F",
"EDL203G","VEL405G"];

dataMatrixRestEPlusTwo[1] = ["STA405G","VEL601G","TOL203G","VEL202G","REI202M",
"STA401G","HBV601G","STA205G","IDN603G","EDL402G","STA203G","IDN401G","VEL402G"
,"HBV201G","TOL403G","EDL201G","VEL401G","HBV402G","EFN408G","VEL201G","EDL203G"
,"HBV401G","TOL401G","STA403M","REI201G","TOV602M","TOL202M","IDN402G","TOV201G"
,"RAF404G","TOL203M","STA202G","STA207G","STA411G","EDL205G","LEF406G","LIF412M"
,"LIF401G","EFN410G","LIF201G","LIF635G","EFN406G","EFN404G","LIF615M","EFN202G"
,"LIF403G","EFN208G","LIF614M","EFN612M","FER603M","LAN604M","FER210F","FER208G"
,"FER211F","RAF403G","RAF401G","RAF402G","EDL401G","BYG603G","BYG401G","BYG601G"
,"UMV203M","BYG202M","BYG203M","BYG201M","TOL203F","HBV203F","IDN209F","JAR253F"
,"JAR417G","LIF633G","LEF616M","LEF617M","EDL403G","IDN403G","VEL218F","RAF601G"
,"UMV203G","STA418M","EDL402M","UMV201G","STA209G","JAR211G","JED201G","JAR617G"
,"JAR202G","JAR415G","JAR212G","EFN207G","RAF201G","UAU214M","UAU206M","JAR611G"
,"LIF214G","LIF215G","EDL204G","LAN219G","LAN401G","EDL612M","BYG201G","VEL215F"
,"LAN205G","EFN205G","EFN214G","JAR418G","UMV213F","LAN203G","RAF616M","FER409G"
,"LIF227F","MAS201F","LIF410G","LIF243F","LAN410G","LAN209F","EDL206G","JAR619G"
,"FER609G","VEL405G"];

dataMatrixRestEPlusThree[1] = ["VEL601G","STA405G","TOL203G","VEL202G",
"REI202M","STA401G","HBV601G","STA205G","IDN603G","EDL402G","STA203G","IDN401G",
"VEL402G","HBV201G","TOL403G","EDL201G","VEL401G","HBV402G","EFN408G","VEL201G",
"EDL203G","HBV401G","TOL401G","STA403M","REI201G","TOV602M","TOL202M","IDN402G",
"TOV201G","RAF404G","TOL203M","STA202G","STA207G","STA411G","EDL205G","LIF412M",
"LEF406G","LIF401G","EFN410G","LIF201G","LIF635G","EFN406G","EFN404G","LIF615M",
"EFN202G","LIF403G","EFN208G","LIF614M","EFN612M","LAN604M","FER603M","FER210F",
"FER208G","FER211F","RAF403G","RAF401G","RAF402G","EDL401G","BYG603G","BYG401G",
"BYG601G","UMV203M","BYG202M","BYG203M","BYG201M","TOL203F","HBV203F","IDN209F",
"JAR253F","JAR417G","LIF633G","LEF616M","LEF617M","EDL403G","IDN403G","VEL218F",
"RAF601G","UMV203G","STA418M","EDL402M","UMV201G","JAR211G","STA209G","JED201G",
"JAR617G","JAR202G","JAR415G","JAR212G","EFN207G","RAF201G","UAU214M","UAU206M",
"JAR611G","LIF214G","LIF215G","EDL204G","LAN219G","LAN401G","EDL612M","BYG201G",
"VEL215F","LAN205G","EFN205G","EFN214G","JAR418G","UMV213F","LAN203G","RAF616M",
"FER409G","LIF227F","MAS201F","LIF410G","LIF243F","LAN410G","LAN209F","EDL206G",
"JAR619G","FER609G","VEL405G"];

dataMatrixRestEPlusFour[1] = ["VEL601G","STA405G","TOL203G","VEL202G","REI202M",
"STA401G","HBV601G","STA205G","IDN603G","EDL402G","STA203G","IDN401G","VEL402G",
"HBV201G","TOL403G","EDL201G","VEL401G","HBV402G","EFN408G","VEL201G","EDL203G",
"HBV401G","TOL401G","STA403M","REI201G","TOV602M","TOL202M","IDN402G","TOV201G",
"RAF404G","TOL203M","STA202G","STA207G","STA411G","EDL205G","LIF412M","LEF406G",
"LIF401G","EFN410G","LIF201G","LIF635G","EFN406G","EFN404G","LIF615M","EFN202G",
"LIF403G","EFN208G","LIF614M","EFN612M","FER603M","LAN604M","FER210F","FER208G",
"FER211F","RAF403G","RAF401G","RAF402G","EDL401G","BYG603G","BYG401G","BYG601G",
"UMV203M","BYG202M","BYG203M","BYG201M","TOL203F","HBV203F","IDN209F","JAR417G",
"JAR253F","LIF633G","LEF616M","LEF617M","EDL403G","IDN403G","VEL218F","RAF601G",
"UMV203G","STA418M","EDL402M","UMV201G","JAR211G","STA209G","JED201G","JAR617G",
"JAR202G","JAR415G","JAR212G","EFN207G","RAF201G","UAU214M","UAU206M","JAR611G",
"LIF214G","LIF215G","EDL204G","LAN219G","LAN401G","EDL612M","BYG201G","VEL215F",
"LAN205G","EFN205G","EFN214G","JAR418G","UMV213F","LAN203G","RAF616M","FER409G",
"LIF227F","MAS201F","LIF410G","LIF243F","LAN410G","LAN209F","EDL206G","JAR619G",
"FER609G","VEL405G"];

dataMatrixStudents[1] = ["VEL601G","HBV401G","STA202G","EFN205G","LEF406G",
"EFN214G","JAR418G","FER603M","RAF403G","BYG603G","TOL203F","IDN209F","JAR253F",
"LIF412M","LEF617M","UMV213F","LAN203G","STA405G","STA209G","TOL203G","UAU214M",
"VEL202G","LIF401G","LAN604M","EDL403G","BYG201G","TOL401G","JAR211G","JAR417G",
"RAF401G","RAF616M","STA403M","EFN410G","IDN403G","REI202M","LIF201G","REI201G",
"STA207G","STA401G","HBV601G","LIF633G","FER409G","LIF227F","FER210F","STA205G",
"IDN603G","JED201G","LIF635G","EDL402G","EFN406G","BYG401G","TOV602M","STA203G",
"MAS201F","VEL218F","JAR617G","LIF410G","UAU206M","LAN205G","LIF243F","RAF601G",
"EDL204G","EFN404G","BYG601G","IDN401G","LIF214G","EDL612M","VEL402G","HBV201G",
"JAR202G","LIF615M","RAF201G","LEF616M","UMV203G","TOL202M","LAN219G","LAN410G",
"LAN209F","RAF402G","EDL401G","EFN202G","TOL403G","JAR415G","JAR212G","LIF403G",
"FER208G","UMV203M","HBV203F","STA418M","EDL201G","EFN207G","EDL402M","EDL206G",
"BYG202M","BYG203M","VEL401G","IDN402G","JAR619G","LIF215G","TOV201G","EFN208G",
"HBV402G","JAR611G","LIF614M","LAN401G","FER609G","FER211F","RAF404G","STA411G",
"EDL205G","EFN408G","UMV201G","BYG201M","VEL201G","TOL203M","VEL215F","EFN612M",
"VEL405G","EDL203G",];



// Exam slots for each course
dataMatrixWithConstraints[2] = [4,6,3,5,2,5,2,6,7,3,4,4,8,7,5,2,9,9,9,13,1,8,5,
5,3,3,4,1,6,2,5,5,4,5,2,11,1,2,5,11,2,3,2,3,11,12,4,1,3,1,6,5,10,10,2,5,2,2,10,
2,2,2,8,4,3,3,2,6,8,3,3,5,2,2,5,2,4,4,4,4,12,7,1,2,6,7,8,7,6,7,2,2,7,8,8,2,2,2,
4,12,8,1,2,4,8,1,1,10,1,1,3,3,2,6,1,5,10,5,2];

dataMatrixWithoutSeats[2] = [3,3,1,1,2,1,1,3,1,3,2,1,1,3,1,1,2,11,2,13,1,6,4,4,
4,3,9,3,4,4,1,4,3,3,5,3,2,3,10,10,2,2,2,2,7,1,5,6,4,6,2,1,8,8,2,3,1,2,2,1,1,1,4,
5,12,2,1,2,6,4,3,3,2,1,7,1,1,1,3,3,1,4,1,1,5,1,1,1,1,5,5,1,5,1,1,1,4,1,1,1,4,9,
2,1,2,1,1,2,2,2,1,3,2,2,2,1,1,1,2];

dataMatrixUniversity[2] = [1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,4,4,4,5,5,6,6,6,6,6,
7,7,7,7,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,15,15,15,15,15,15,16,16,16,17,17,17,
17,17,17,17,17,17,17,18,18,18,19,19,19,19,19,19,19,20,20,20,20,20,20,20,23,23,
23,23,23,23,24,24,24,24,24,24,24,24,29,29,29,29,29,29,30,30,30,30,30,30,30,30,
30,30,30,30,31,31,31,31,32,32];

dataMatrixRestEPlusTwo[2] = [24,29,20,4,5,15,19,30,6,3,7,10,18,16,32,17,6,2,6,1,
18,1,4,15,29,3,15,3,23,17,29,10,31,2,1,29,31,17,20,31,8,32,2,19,23,3,1,15,23,5,
32,6,7,4,31,1,8,8,8,19,20,29,2,16,1,30,4,5,7,17,23,1,23,19,15,16,18,3,9,6,1,8,
29,16,2,23,23,4,29,8,16,32,8,8,5,1,29,18,4,24,31,16,1,1,6,4,8,19,6,23,7,2,2,9,
9,17,2,4,17];

dataMatrixRestEPlusThree[2] = [1,31,7,6,18,9,20,20,8,16,15,2,5,30,24,32,23,24,
24,10,2,19,10,1,23,1,6,29,3,5,5,19,10,23,16,1,8,3,15,16,23,19,1,32,2,7,10,29,6,
24,30,10,3,1,29,10,18,18,1,24,17,10,19,9,32,17,19,1,7,16,2,18,1,7,19,1,1,5,16,
30,16,1,31,24,29,10,20,32,18,24,6,1,30,24,29,1,15,2,4,29,29,29,16,16,29,1,31,1,
10,2,15,1,1,1,1,32,1,1,19];

dataMatrixRestEPlusFour[2] = [17,32,1,2,31,23,3,10,4,16,24,16,8,30,9,31,3,9,24,
18,30,2,18,23,23,24,23,17,15,6,29,29,2,6,17,7,18,30,16,10,2,31,2,3,15,23,2,5,6,
15,18,10,1,8,9,4,18,18,24,15,29,30,7,2,4,7,30,6,31,32,4,30,1,19,23,5,3,30,8,8,9,
17,32,23,18,29,9,10,20,23,29,8,5,24,29,20,9,19,23,16,17,31,5,5,30,17,32,23,10,4,
24,7,7,1,1,31,29,8,6,];

dataMatrixStudents[2] = [4,8,15,10,9,10,15,1,17,16,18,16,16,16,16,16,7,6,7,2,16,
8,6,10,15,16,9,16,9,15,16,18,15,10,17,3,6,16,10,3,17,9,17,9,3,1,10,18,7,2,17,16,
1,1,15,6,15,15,8,15,16,16,17,15,15,10,10,15,5,4,16,10,17,15,16,16,9,9,16,16,4,7,
16,15,5,6,17,15,19,5,16,2,5,17,17,16,7,16,9,4,8,9,15,15,15,16,16,18,1,17,8,16,
18,2,10,16,18,3,15,];

// Array containing names of courses for groups
var groupArray = new Array(61);
groupArray[0] = ["JAR202G","JED201G","JAR211G","JAR212G"];
groupArray[1] = ["STA203G","VEL202G","EDL201G","VEL201G","STA205G"];
groupArray[2] = ["HBV201G","STA205G","TOV201G","TOL203G"];
groupArray[3] = ["STA203G","EDL206G","STA205G"];
groupArray[4] = ["FER208G","LAN203G","LAN205G"];
groupArray[5] = ["JAR202G","EDL206G","JED201G"];
groupArray[6] = ["LAN219G","LAN203G"];
groupArray[7] = ["EDL206G","STA203G","STA202G","STA207G"];
groupArray[8] = ["STA202G","TOL203G","STA207G","STA203G"];
groupArray[9] = ["STA202G","EFN214G","STA207G","STA203G"];
groupArray[10] = ["STA202G","TOL203G","STA207G","STA203G"];
groupArray[11] = ["STA202G","STA207G","STA203G"];
groupArray[12] = ["STA202G","STA207G","STA203G"];
groupArray[13] = ["STA202G","STA207G","STA203G"];
groupArray[14] = ["STA202G","STA207G","STA203G"];
groupArray[15] = ["STA202G","TOL203G","STA207G","STA203G"];
groupArray[16] = ["STA203G","VEL202G","EDL201G","VEL201G","STA205G"];
groupArray[17] = ["JAR211G","JAR202G","EFN202G"];
groupArray[18] = ["LIF215G","LIF201G","LIF214G","EFN214G"];
groupArray[19] = ["UMV203G","STA203G","STA205G","BYG201G"];
groupArray[20] = ["EFN208G","STA203G","STA205G","EFN202G","EDL201G"];
groupArray[21] = ["HBV201G","TOL203G","REI201G","TOV201G"];
groupArray[22] = ["HBV201G","TOL203G","REI201G","TOV201G"];
groupArray[23] = ["HBV201G","TOL203G","STA203G","STA205G","TOV201G"];
groupArray[24] = ["HBV201G","TOL203G","REI201G"];
groupArray[25] = ["STA203G","IDN401G","STA205G"];
groupArray[26] = ["EFN208G","EFN207G","EFN202G"];
groupArray[27] = ["EFN208G","STA205G","EFN202G","EDL201G"];
groupArray[28] = ["LAN205G","LAN203G","FER208G"];
groupArray[29] = ["STA209G","JAR418G","JAR417G"];
groupArray[30] = ["STA405G","IDN403G","HBV402G","IDN401G"];
groupArray[31] = ["STA203G","HBV401G","TOL401G"];
groupArray[32] = ["EDL401G","STA405G","STA401G"];
groupArray[33] = ["LAN410G","FER409G"];
groupArray[34] = ["STA401G","EDL203G","EDL402G","EDL401G"];
groupArray[35] = ["EDL205G","STA405G","STA401G"];
groupArray[36] = ["STA418M","STA405G"];
groupArray[37] = ["STA405G","IDN401G"];
groupArray[38] = ["STA405G","IDN401G"];
groupArray[39] = ["STA411G","STA405G"];
groupArray[40] = ["VEL402G","STA405G","VEL401G","STA401G","EDL402G"];
groupArray[41] = ["JAR415G","JED201G","STA209G"];
groupArray[42] = ["LIF410G","LIF403G","LIF401G"];
groupArray[43] = ["UMV201G","BYG401G","STA405G","STA401G"];
groupArray[44] = ["STA405G","VEL601G","EFN408G"];
groupArray[45] = ["HBV401G","STA203G","TOL403G","TOL401G"];
groupArray[46] = ["HBV401G","STA203G"];
groupArray[47] = ["HBV401G","IDN401G","TOL403G","STA405G"];
groupArray[48] = ["HBV401G","STA203G"];
groupArray[49] = ["STA202G","STA405G"];
groupArray[50] = ["EFN404G","EFN406G","EFN410G","EFN408G"];
groupArray[51] = ["EFN404G","STA203G","EFN406G","EFN408G"];
groupArray[52] = ["LAN410G","FER409G"];
groupArray[53] = ["TOL403G","IDN603G"];
groupArray[54] = ["IDN402G","IDN603G"];
groupArray[55] = ["BYG603G","BYG601G"];
groupArray[56] = ["LEF616M","LEF617M"];
groupArray[57] = ["LIF614M","LIF412M"];
groupArray[58] = ["TOL403G","TOL401G"];
groupArray[59] = ["FER609G","FER603M"];
groupArray[60] = ["FER409G","FER208G","LAN410G"];

exports.dataMatrixWithConstraints = dataMatrixWithConstraints;
exports.dataMatrixWithoutSeats = dataMatrixWithoutSeats;
exports.dataMatrixUniversity = dataMatrixUniversity;
exports.dataMatrixRestEPlusTwo = dataMatrixRestEPlusTwo;
exports.dataMatrixRestEPlusThree = dataMatrixRestEPlusThree;
exports.dataMatrixRestEPlusFour = dataMatrixRestEPlusFour;
exports.dataMatrixStudents = dataMatrixStudents;
exports.groupArray = groupArray;
