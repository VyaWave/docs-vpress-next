const allData = `
2022-03-28
2545
90787
2.99%
41746
4300
36
2628
190
17
1529
53
6
2022-03-29
4731
94713
4.32%
45536
4600
38
2231
191
18
2259
50
9
2022-03-30
7543
101175
6.82%
53095
5200
34
2452
236
28
1392
42
6
2022-03-31
7297
106956
5.71%
57990
5600
25
2673
226
32
1583
61
7
2022-04-01
7431
113413
6.04%
64389
6200
29
3197
353
34
1910
69
10
2022-04-02
6991
117618
3.71%
67367
6600
23
4115
278
25
1356
74
13
2022-04-03
4756
122944
4.53%
72299
7100
26
4357
400
30
2123
50
10
2022-04-04
4839
128272
4.33%
77922
7600
19
3718
346
25
1528
57
10
2022-04-05
7931
134400
4.78%
82958
8200
18
3122
311
25
2363
49
10
2022-04-06
12874
137566
2.36%
87368
8800
21
3358
280
18
1180
44
10
2022-04-07
7642
144440
5.00%
92998
9300
21
2294
279
14
1249
18
11
2022-04-08
7536
150503
4.20%
96385
9700
22
3155
267
18
1124
35
8
2022-04-09
4215
155427
3.27%
100584
10200
20
3312
229
19
1887
40
6
2022-04-10
3769
159036
2.32%
104665
10700
21
3753
300
22
1151
48
11
2022-04-11
3651
164673
3.54%
108908
11300
22
2691
232
16
1145
17
3
2022-04-12
4649
171641
4.23%
115610
11800
23
3866
280
12
2053
29
3
`;

const headers = [
  'Date',
  'Twitter Daily Gained',
  'Discord Users',
  'Growth Rate.',
  'Telegram Users',
  'Reddit Users',
  'Google Play Rankings',
  'Common Sneakers',
  'Uncommon.',
  'Rare',
  'Common Shoeboxes',
  'Uncommon.',
  'Rare',
];

const format = string =>
  string
    .replaceAll('\n', ',')
    .split(',')
    .map(it => `${it}`)
    .filter(it => it !== '');

const getFormatData = string => {
  return string
    .split(/((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/g)
    .filter(it => it !== '\n')
    .map(format);
};

// const formatData = getFormatData(allData);

// console.info('=========  formatData  =========', formatData);

const DD = [
  ['2022-03-28', '2545', '90787', '2.99%', '41746', '4300', '36', '2628', '190', '17', '1529', '53', '6'],
  ['2022-03-29', '4731', '94713', '4.32%', '45536', '4600', '38', '2231', '191', '18', '2259', '50', '9'],
  ['2022-03-30', '7543', '101175', '6.82%', '53095', '5200', '34', '2452', '236', '28', '1392', '42', '6'],
  ['2022-03-31', '7297', '106956', '5.71%', '57990', '5600', '25', '2673', '226', '32', '1583', '61', '7'],
  ['2022-04-01', '7431', '113413', '6.04%', '64389', '6200', '29', '3197', '353', '34', '1910', '69', '10'],
  ['2022-04-02', '6991', '117618', '3.71%', '67367', '6600', '23', '4115', '278', '25', '1356', '74', '13'],
  ['2022-04-03', '4756', '122944', '4.53%', '72299', '7100', '26', '4357', '400', '30', '2123', '50', '10'],
  ['2022-04-04', '4839', '128272', '4.33%', '77922', '7600', '19', '3718', '346', '25', '1528', '57', '10'],
  ['2022-04-05', '7931', '134400', '4.78%', '82958', '8200', '18', '3122', '311', '25', '2363', '49', '10'],
  ['2022-04-06', '12874', '137566', '2.36%', '87368', '8800', '21', '3358', '280', '18', '1180', '44', '10'],
  ['2022-04-07', '7642', '144440', '5.00%', '92998', '9300', '21', '2294', '279', '14', '1249', '18', '11'],
  ['2022-04-08', '7536', '150503', '4.20%', '96385', '9700', '22', '3155', '267', '18', '1124', '35', '8'],
  ['2022-04-09', '4215', '155427', '3.27%', '100584', '10200', '20', '3312', '229', '19', '1887', '40', '6'],
  ['2022-04-10', '3769', '159036', '2.32%', '104665', '10700', '21', '3753', '300', '22', '1151', '48', '11'],
  ['2022-04-11', '3651', '164673', '3.54%', '108908', '11300', '22', '2691', '232', '16', '1145', '17', '3'],
  ['2022-04-12', '4649', '171641', '4.23%', '115610', '11800', '23', '3866', '280', '12', '2053', '29', '3'],
];

const dddd = DD.map(it => {
  return {
    Date: it[0],
    TwitterDailyGained: it[1],
    DiscordUsers: it[2],
    GrowthRate: it[3],
    TelegramUsers: it[4],
    RedditUsers: it[5],
    GooglePlayRankings: it[6],
    CommonSneakers: it[7],
    UncommonSneakers: it[8],
    RareSneakers: it[9],
    CommonShoeboxes: it[10],
    UncommonShoeboxes: it[11],
    RareShoeboxes: it[12],
  };
});

console.info('=========  dddd  =========', dddd);

const DT = [
  {
    Date: '2022-03-28',
    TwitterDailyGained: '2545',
    DiscordUsers: '90787',
    GrowthRate: '2.99%',
    TelegramUsers: '41746',
    RedditUsers: '4300',
    GooglePlayRankings: '36',
    CommonSneakers: '2628',
    UncommonSneakers: '190',
    RareSneakers: '17',
    CommonShoeboxes: '1529',
    UncommonShoeboxes: '53',
    RareShoeboxes: '6',
  },
  {
    Date: '2022-03-29',
    TwitterDailyGained: '4731',
    DiscordUsers: '94713',
    GrowthRate: '4.32%',
    TelegramUsers: '45536',
    RedditUsers: '4600',
    GooglePlayRankings: '38',
    CommonSneakers: '2231',
    UncommonSneakers: '191',
    RareSneakers: '18',
    CommonShoeboxes: '2259',
    UncommonShoeboxes: '50',
    RareShoeboxes: '9',
  },
  {
    Date: '2022-03-30',
    TwitterDailyGained: '7543',
    DiscordUsers: '101175',
    GrowthRate: '6.82%',
    TelegramUsers: '53095',
    RedditUsers: '5200',
    GooglePlayRankings: '34',
    CommonSneakers: '2452',
    UncommonSneakers: '236',
    RareSneakers: '28',
    CommonShoeboxes: '1392',
    UncommonShoeboxes: '42',
    RareShoeboxes: '6',
  },
  {
    Date: '2022-03-31',
    TwitterDailyGained: '7297',
    DiscordUsers: '106956',
    GrowthRate: '5.71%',
    TelegramUsers: '57990',
    RedditUsers: '5600',
    GooglePlayRankings: '25',
    CommonSneakers: '2673',
    UncommonSneakers: '226',
    RareSneakers: '32',
    CommonShoeboxes: '1583',
    UncommonShoeboxes: '61',
    RareShoeboxes: '7',
  },
  {
    Date: '2022-04-01',
    TwitterDailyGained: '7431',
    DiscordUsers: '113413',
    GrowthRate: '6.04%',
    TelegramUsers: '64389',
    RedditUsers: '6200',
    GooglePlayRankings: '29',
    CommonSneakers: '3197',
    UncommonSneakers: '353',
    RareSneakers: '34',
    CommonShoeboxes: '1910',
    UncommonShoeboxes: '69',
    RareShoeboxes: '10',
  },
  {
    Date: '2022-04-02',
    TwitterDailyGained: '6991',
    DiscordUsers: '117618',
    GrowthRate: '3.71%',
    TelegramUsers: '67367',
    RedditUsers: '6600',
    GooglePlayRankings: '23',
    CommonSneakers: '4115',
    UncommonSneakers: '278',
    RareSneakers: '25',
    CommonShoeboxes: '1356',
    UncommonShoeboxes: '74',
    RareShoeboxes: '13',
  },
  {
    Date: '2022-04-03',
    TwitterDailyGained: '4756',
    DiscordUsers: '122944',
    GrowthRate: '4.53%',
    TelegramUsers: '72299',
    RedditUsers: '7100',
    GooglePlayRankings: '26',
    CommonSneakers: '4357',
    UncommonSneakers: '400',
    RareSneakers: '30',
    CommonShoeboxes: '2123',
    UncommonShoeboxes: '50',
    RareShoeboxes: '10',
  },
  {
    Date: '2022-04-04',
    TwitterDailyGained: '4839',
    DiscordUsers: '128272',
    GrowthRate: '4.33%',
    TelegramUsers: '77922',
    RedditUsers: '7600',
    GooglePlayRankings: '19',
    CommonSneakers: '3718',
    UncommonSneakers: '346',
    RareSneakers: '25',
    CommonShoeboxes: '1528',
    UncommonShoeboxes: '57',
    RareShoeboxes: '10',
  },
  {
    Date: '2022-04-05',
    TwitterDailyGained: '7931',
    DiscordUsers: '134400',
    GrowthRate: '4.78%',
    TelegramUsers: '82958',
    RedditUsers: '8200',
    GooglePlayRankings: '18',
    CommonSneakers: '3122',
    UncommonSneakers: '311',
    RareSneakers: '25',
    CommonShoeboxes: '2363',
    UncommonShoeboxes: '49',
    RareShoeboxes: '10',
  },
  {
    Date: '2022-04-06',
    TwitterDailyGained: '12874',
    DiscordUsers: '137566',
    GrowthRate: '2.36%',
    TelegramUsers: '87368',
    RedditUsers: '8800',
    GooglePlayRankings: '21',
    CommonSneakers: '3358',
    UncommonSneakers: '280',
    RareSneakers: '18',
    CommonShoeboxes: '1180',
    UncommonShoeboxes: '44',
    RareShoeboxes: '10',
  },
  {
    Date: '2022-04-07',
    TwitterDailyGained: '7642',
    DiscordUsers: '144440',
    GrowthRate: '5.00%',
    TelegramUsers: '92998',
    RedditUsers: '9300',
    GooglePlayRankings: '21',
    CommonSneakers: '2294',
    UncommonSneakers: '279',
    RareSneakers: '14',
    CommonShoeboxes: '1249',
    UncommonShoeboxes: '18',
    RareShoeboxes: '11',
  },
  {
    Date: '2022-04-08',
    TwitterDailyGained: '7536',
    DiscordUsers: '150503',
    GrowthRate: '4.20%',
    TelegramUsers: '96385',
    RedditUsers: '9700',
    GooglePlayRankings: '22',
    CommonSneakers: '3155',
    UncommonSneakers: '267',
    RareSneakers: '18',
    CommonShoeboxes: '1124',
    UncommonShoeboxes: '35',
    RareShoeboxes: '8',
  },
  {
    Date: '2022-03-09',
    TwitterDailyGained: '4215',
    DiscordUsers: '155427',
    GrowthRate: '3.27%',
    TelegramUsers: '100584',
    RedditUsers: '10200',
    GooglePlayRankings: '20',
    CommonSneakers: '3312',
    UncommonSneakers: '229',
    RareSneakers: '19',
    CommonShoeboxes: '1887',
    UncommonShoeboxes: '40',
    RareShoeboxes: '6',
  },
  {
    Date: '2022-04-10',
    TwitterDailyGained: '3769',
    DiscordUsers: '159036',
    GrowthRate: '2.32%',
    TelegramUsers: '104665',
    RedditUsers: '10700',
    GooglePlayRankings: '21',
    CommonSneakers: '3753',
    UncommonSneakers: '300',
    RareSneakers: '22',
    CommonShoeboxes: '1151',
    UncommonShoeboxes: '48',
    RareShoeboxes: '11',
  },
  {
    Date: '2022-04-11',
    TwitterDailyGained: '3651',
    DiscordUsers: '164673',
    GrowthRate: '3.54%',
    TelegramUsers: '108908',
    RedditUsers: '11300',
    GooglePlayRankings: '22',
    CommonSneakers: '2691',
    UncommonSneakers: '232',
    RareSneakers: '16',
    CommonShoeboxes: '1145',
    UncommonShoeboxes: '17',
    RareShoeboxes: '3',
  },
  {
    Date: '2022-04-12',
    TwitterDailyGained: '4649',
    DiscordUsers: '171641',
    GrowthRate: '4.23%',
    TelegramUsers: '115610',
    RedditUsers: '11800',
    GooglePlayRankings: '23',
    CommonSneakers: '3866',
    UncommonSneakers: '280',
    RareSneakers: '12',
    CommonShoeboxes: '2053',
    UncommonShoeboxes: '29',
    RareShoeboxes: '3',
  },
];
