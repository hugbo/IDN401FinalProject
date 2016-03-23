///////////////////////
///////DATA FILE///////
///////////////////////

// Array containing data concerning exam-table setup
var dataMatrixWithConstraints = new Array(2);

// First line in array. Contains courses in exam-table
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

// Exam slot for each course
dataMatrixWithConstraints[2] = [4,6,3,5,2,5,2,6,7,3,4,4,8,7,5,2,9,9,9,13,1,8,5,5,3,
3,4,1,6,2,5,5,4,5,2,11,1,2,5,11,2,3,2,3,11,12,4,1,3,
1,6,5,10,10,2,5,2,2,10,2,2,2,8,4,3,3,2,6,8,3,3,5,2,2,
5,2,4,4,4,4,12,7,1,2,6,7,8,7,6,7,2,2,7,8,8,2,2,2,4,12,
8,1,2,4,8,1,1,10,1,1,3,3,2,6,1,5,10,5,2];

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
exports.groupArray = groupArray;
