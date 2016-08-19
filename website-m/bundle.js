!function(e){function i(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var t={};return i.m=e,i.c=t,i.p="",i(0)}([function(e,i,t){"use strict";function n(){var e=document;this.listBtn=e.querySelector("#list"),this.menu=e.querySelector(".menu"),this.pageLink=e.querySelectorAll(".page-link"),this.langChange=e.querySelector(".lang-change"),this.rootPage=e.querySelector(".page-root"),this.joinPage=e.querySelector(".page-join"),this.prevBtn=e.querySelector(".ar-l"),this.nextBtn=e.querySelector(".ar-r"),this.picList=e.querySelectorAll(".slide-con li"),this.listText=e.querySelectorAll(".menu span"),this.iconTitleText=e.querySelectorAll(".ic-t"),this.iconDescText=e.querySelectorAll(".ic-d"),this.slideTitleText=e.querySelectorAll(".slide-t"),this.slideDescText=e.querySelectorAll(".slide-d"),this.concatTitleText=e.querySelector(".concat h1"),this.concatNameText=e.querySelector(".ct-t"),this.concatDescText=e.querySelector(".ct-d"),this.addressText=e.querySelector(".address"),this.postText=e.querySelector(".post"),this.copyrightText=e.querySelector(".copyright"),this.codeText=e.querySelector(".code"),this.teamDescText=e.querySelector(".sum-join p"),this.logoImg=e.querySelector(".logo"),this.bannerLogoImg=e.querySelector(".banner-logo"),this.iosImg=e.querySelector(".ios"),this.androidImg=e.querySelector(".android"),this.QRcodeImg=e.querySelector(".QRcode"),this.joinLogoImg=e.querySelector(".banner-join img"),this.joinImg=e.querySelector(".join"),this.deatilJoinArea=e.querySelector(".detail-join"),this.currentPic=0,this.listShowFlag=!1,this.currentPage="root",this.currentLang="zh",this.imgPath="./src/images/",this.dictionary={zh:{logoUrl:"logo-zh.png",list:["首页","加入我们","中文/English"],bannerUrl:"logo-banner.png",iosUrl:"download-ios.png",androidUrl:"download-android.png",icon:{t:["跨平台","探索","生活方式"],d:["集结全球热门社交平台，一键带你看世界","用眼界丈量世界宽广，探趣地图就是你的任意门","最潮资讯，用流行脉搏精致你的业余生活"]},slide:{t:["热点速递","趣味探索","流行脉搏"],d:["每日精选Facebook、Twitter、Instagram、微博四大平台热门事件，咨询就是要看最新鲜。明星网红，一键关注，最新动态随时Get。","探索全球热门地点，足不出户环游世界。搜索实时热点，发现有趣的休闲方式。让探趣带你加入最有范的组织，结交最有趣的伙伴。","无论你是时尚潮人、健身爱好者、旅行达人、摄影迷还是吃货，在探趣，每天都能发现新灵感。"]},concat:{t:"联系我们",name:"成都睿码科技有限责任公司",d:"成都睿码科技有限责任公司，是一家基于社交媒体内容的领先大数据企业，汇集了全球最广最全的社交媒体数据内容，包括微博、Instagram、Facebook、Twitter、大众点评、Yelp、QQ空间等社交数据。睿码科技致力于构建全球社交媒体数据的采集、存储、分析和应用于一体的大数据综合服务平台，打造基于社交大数据的基础服务和应用生态圈，为各类客户提供社交数据领域咨询服务、软件产品和行业解决方案。母公司为纳斯达克上市公司Remark Media, Inc. (MARK)。"},QRcode:{width:"58.3%",url:"QRcode.png"},address:"地址：四川省成都市高新区天仁路凯德天府写字楼15楼 No.5-8",post:"邮编：610000",cr:"成都睿码科技有限责任公司 版权所有",code:"蜀ICP备16009239号",joinLogoUrl:"join-logo.png",joinUrl:"join.png",teamDesc:"探趣是一支年轻、 朝气蓬勃、 有想法的团队， 从公司成立之初到现在我们一直坚守三个原则： Responsibility、 Respect、Character。在你认真工作，帮助公司发展的时候，公司也将尽自己最大的努力为你谋福利，我们要求尽职尽责地完成自己的任务，同时也尊重你休息的权利，如果你是一个充满正能量、有创造力、乐于学习、有责任感的人，那么赶快加入我们，和我们一起努力，共同成长。",jobDetail:[{title:"架构和运维团队负责人",desc:[],duty:["领导基础设施开发团队一起工作，构建大数据（2PB+）基础设施包括高性能计算服务，数据储存，索引，高可用性","领导基础设施开发团队实现在大数据环境中的数据分析和数据挖掘","领导运维团队在软件和硬件方面设置，维护，管理和   监控大数据结构"],ask:["8年以上Java工作经验，3年结构设计经验，主要负责后台开发","熟悉OOA/OOD/OOP，多命令使用结构和设计模式，熟悉UML和设计工具","Scala/Akka/HBASE/Elasticsearch/Hadoop大数据开发经验优先","优秀的编程能力和学习能力，有动力，对技术有热情","敏捷开发团队工作经验","良好的英语读写能力","良好的沟通能力和团队合作精神","技术或团队负责人经历优先","本科及以上学历，计算机或相关工程专业"]},{title:"高级运营经理",desc:["探趣是一款个性化的关注于流行生活方式的App, 帮助用户找到感兴趣的内容，探索周边新鲜事，发现世界各地热门事件。探趣集合了各大社交平台，呈现社交网络中最热门精彩的帖子给用户。我们的内容都精选自各大社交平台例如Facebook, Twitter, Instagram, Weibo的个人用户。我们的热图汇聚了各类健康生活方式，最流行的文化，运动，旅行，健身，总有一样适合你。快来加入最具技术性和创意的国际团队","该职位报告给市场总监，将负责发展和领导社交媒体团队。理想的候选人需具有创意，分析和领导的综合能力。你会负责所有现有平台的整体战略，战略性社会媒体和数字的举措，包括制定和创建有吸引力的宣传策略，建立和监管社交平台，将用户生成的内容和完整的社交媒体整合成为全面的商务策略。该职位要求对社会化媒体的发展趋势有深刻的理解"],duty:["为数字发展，包括社交媒体建立全面的策略和路线","在适当的时候提出可以发展品牌影响力的策略","科学研究用户的思想，行为，和上网习惯，将新趋势和技术知识应用到项目中","管理预算和广告活动","了解新媒体技术，为潜在合作伙伴做出适当的调整和管理","负责社交媒体团队的招聘和管理，保证随时提供高质量的管理，交流和产品交付","整合社交媒体活动计划，保证我们的运营活动可以吸引更多的用户并获得支持","管理战略合作伙伴，社交媒体机构，有影响力的人物和社交检测平台，支持和发展我们的运营和商业机会","管理媒体和应用发展趋势，在公司内部担任相关专家","管理和关注市场竞争，市场变化和发展"],ask:["8年以上社交媒体或数字媒体领域经验","对发展社交媒体有丰富的经验和策略","在社交媒体领域建立和维护专业合作关系有丰富的经验","洽谈外部供应商，包括洽谈合同，价格，解决服务争议和调解纷争","清楚了解用户所读，所看，所听","和各专业部门高度合作，推动并鼓舞团队，控制时间点和预算，能够未雨绸缪并想出方法解决复杂的问题"]},{title:"数据分析和数据挖掘工程师",desc:[],duty:["在大数据环境中开发数据分析和数据挖据的平台","在大数据环境中开发数据报告和数据产品","维护数据分析和挖掘的平台"],ask:["5年以上Java工作经验，2年数据分析和挖据经验","Spark/HBASE/Yarn/Hadoop开发经验","熟悉分布式算法","优秀的编程能力和学习能力","敏捷开发团队工作经验","良好的沟通能力和团队合作能力","保持开拓探索精神，对技术有热情","良好的英语读写能力"]},{title:"PHP开发工程师",desc:[],duty:["参与公司CMS系统、电商，社交类网站开发","参与产品或者项目的技术讨论，能为产品迭代给出合理建议","参与新技术的调研、保持产品的技术生命力"],ask:["4年及以上PHP开发相关经验","熟练应用Linux, Mongodb, Nginx, Apache","有Drupal或Joomla开发实际经验","了解HTML和CSS能够和前端有良好沟通","了解HTTP协议的各种细节","沟通能力强，能和相关团队良好协作","有互联网、电子商务行业相关经验优先考虑"]},{title:"基础架构工程师",desc:[],duty:["和基础设施开发团队一起工作，构建大数据（2PB+）基础设施包括高性能计算服务，数据储存，索引，高可用性"],ask:["5年以上Java工作经验，主要负责后台开发","熟悉OOA/OOD/OOP，多命令使用结构和设计模式，熟悉UML和设计工具","Scala/Akka/HBASE/Elasticsearch/Hadoop大数据开发经验优先","优秀的编程能力和学习能力，有动力，对技术有热情","敏捷开发团队工作经验","良好的英语读写能力","良好的沟通能力和团队合作精神","技术或团队负责人经历优先","本科及以上学历，计算机或相关工程专业"]}]},en:{logoUrl:"logo-en.png",list:["Home","Join","English/中文"],bannerUrl:"logo-banner-en.png",iosUrl:"download-ios-en.png",androidUrl:"download-android-en.png",icon:{t:["Multiplatform","Explore","Lifestyle"],d:["KanKan integrates most major social networks.</br>Our local experts curate</br>content from multiple platforms","Check out our map!</br>Find excitement and inspiration</br>for your next adventure","Discover special finds</br>on what to eat,</br>where to shop and how to explore"]},slide:{t:["Trending","Lifestyle","Explore"],d:["KanKan highlights trending stories from major social networks around the world, sourced from the most engaging content.","Our LIFE-Stylish channel brings you the best in popular culture, sports, food, travel, fitness and more.","Experience different perspectives on how the world sees, we personalize and localize all our content."]},concat:{t:"CONTACT US",name:"Chengdu Science and Technology Co.</br>Ltd. Rui code",d:"Chengdu Ruima Technology Company Ltd, is a leader in providing big data analytics and insights. Our multi platform ecosystem of the world’s major social networks and e-commerace sites, drives insights on complex consumer and buying behavior.</br>Our  core technology is in data acquisition, storage, analysis, and applied to an integrated service platform, to create applications providing fact based business solutions for marketers. KanKan is under the umbrella for the parent NASDAQ listed company Remark Media, Inc. (MARK)."},QRcode:{width:"78.4%",url:"QRcode-en.png"},address:'Adress：<span class="t-gray">Ten Ren Road, Chengdu Hi-tech Zone No. 388 Tianfu Cade 15th floor office No. 5-8</span>',post:'Zip Code：<span class="t-gray">610000</span>',cr:"Chengdu remark media Technology Co., Ltd. responsibility",code:"Shu ICP NOTE - No. 16009239",joinLogoUrl:"join-logo-en.png",joinUrl:"join-en.png",teamDesc:"KanKan is a young and vibrant company filled with the best creative and technology team members. Our mission is to provide the most integrated social data, and bringing trending stories from all over the world. Here at KanKan we adhere to three principals of; Responsibility, Respect and Character. We only hire the best people for the positions, we in turn expect the best output from our team, while having fun! So if you are on the top of your game, want to make a difference in how the world see’s, come join our fun team with lots of perks! ",jobDetail:[{title:"Team Lead of Infrastructure and Operations",desc:[],duty:["Lead Infrastructure dev team to build big data (2 PB+) infrastructure including high performance computing application services, data storage, indexing, archiving and high availability","Lead Infrastructure dev team to implement data mining and data analysis in big data environment","Lead operation service team to setup, maintain, manage and monitor big data infrastructure at hardware and network level"],ask:["8+ year Java working experience with 3 years architecture design experience, mainly focus on backend developing","Familiar with OOA/OOD/OOP, familiar with multiple command used architecture and design pattern, familiar with UML and design tools","Scala/Akka/HBASE/Elasticsearch/Hadoop Big Data developing experience is a strong plus","Good coding styles, good study ability, have enthusiasm to new technology","Working experience in an agile developing team","Good English reading and writing ability","Good communication skills and teamwork spirit","Tech lead or team lead experience is a plus","Bachelor degree or above in computer science or related engineering major"]},{title:"Digital & Content Strategist, Senior Manager",desc:["TanQu is a new personalized and interactive lifestyle mobile application that will connect content to commerce. We currently source UGC, from major social platforms like Facebook, Instagram, Twitter, Weibo and more, to create visual trending stories. Our app helps discover the world’s big stage moments to cool local events. Our lifestyle channel brings you the best in popular culture, sports, food, travel and fitness, all sourced from the most engaging social content from around the world","Come join the international team of the most technical and creative individuals!","This position reports to the Head of Marketing and will be responsible for developing and leading the social media team. The ideal candidate has a strong mix of creative, analytical, and leadership skills. You will responsible for the overall strategy on all existing platforms, execution of strategic social media and digital initiatives, including developing and creating compelling brand worthy campaigns, creating and supervising social channels, curating user-generated content and integrating social media into the overall business strategy. The position requires a strong understanding of social media trends"],duty:["Create a comprehensive strategy and roadmap for digital, inclusive of social media","Propose strategy for engaging content with a strong brand voice, engaging with influencers when appropriate","Development of research methodologies to understand how consumers think, act and behave online and applying knowledge of emerging trends and technology to programs","Oversee budgets and ad campaigns","Review new social media technology, and make recommendations to upper management regarding potential partnerships","Recruit and oversee the Social Media Team, ensuring a superior quality of communication and project delivery is provided at all times","Coordinate the planning of social media campaigns, ensuring customer acquisition and supporting key marketing initiatives","Source and manage relationships with strategic partners, social media agencies, influencers and social monitoring platforms to support and develop operational and commercial opportunities","Monitor trends in social media and application, acting as subject matter expert within the company","Monitor the competition and be aware of market changes and developments"],ask:["+8 years of experience in social media and/or digital media space","Proven experience developing social media strategies","Experience establishing and maintaining professional partnerships in the social media space","Experience negotiating with outside vendors, including negotiating contracts, prices, resolving service issues and reconciling differences","Understands, and has a passion for what users are reading, watching and listening","Work well within highly collaborative, multidisciplinary teams – displaying proven ability in running and inspiring a team, controlling timelines and budgets, anticipating issues and working towards solutions to complex problems"]},{title:"Data analysis and mining engineer",desc:[],duty:["Develop the data analysis and mining platform in big data environment","Develop data report and data product in big data environment","Maintain the analysis and mining platform"],ask:["5+ year Java working experience with 2 years data analysis and mining","Spark/HBASE/Yarn/Hadoop developing experience","Familiar with distributed algorithm","Good coding styles, good study ability","Working experience in an agile developing team","Good communication skills and teamwork spirit","Having always retained pioneering spirit and having strong enthusiasm for technology","Good English reading and writing ability"]},{title:"PHP Engineer",desc:[],duty:["Participate in company CMS system, E-company and social networking website development","Involve in technical discussions of products or projects, and give reasonable suggestions for product substitution","Involved in convey of new technologies and maintain t products technological vitality"],ask:["4+ years PHP related development experience","Familiar with Linux, Mongodb, Nginx, Apache","Drupal or Joomla development experience","Familiar with HTML and CSS, have good  communication with frontend","Familiar with details of HTTP protocol","Good communication skills and team spirit","Internet, e-commerce related experience is a plus"]},{title:"Infrastructure Engineer",desc:[],duty:["Work with infrastructure dev team to build big data (2PB+) infrastructure including high performance computing application services, data storage, indexing, archiving and high availability"],ask:["5+ year Java working experience, mainly focus on backend developing","Familiar with OOA/OOD/OOP, familiar with multiple command used architecture and design pattern, familiar with UML and design tools","Scala/Akka/HBASE/Elasticsearch/Hadoop Big Data developing experience is a strong plus","Good coding styles, good study ability, good motivation, have enthusiasm to new technology","Working experience in an agile developing team","Good English reading and writing ability","Good communication skills and teamwork spirit","Tech lead or team lead experience is a plus","Bachelor degree or above in computer science or related engineering major"]}]}}}t(1),n.prototype={init:function(){this.fillJobInfo()},listSwitch:function(){this.listShowFlag?this.menu.style.display="none":this.menu.style.display="block",this.listShowFlag=!this.listShowFlag},turnPage:function(e){var i=e.getAttribute("data-page");i!=this.currentPage&&("root"==i?(this.rootPage.style.display="block",this.joinPage.style.display="none",e.className="page-link active",this.pageLink[1].className="page-link"):(this.rootPage.style.display="none",this.joinPage.style.display="block",e.className="page-link active",this.pageLink[0].className="page-link"),this.listSwitch(),this.currentPage=i)},changeLang:function(){this.currentLang="zh"==this.currentLang?"en":"zh";var e=this.dictionary[this.currentLang];this.logoImg.src=this.imgPath+e.logoUrl,this.listText[0].innerHTML=e.list[0],this.listText[1].innerHTML=e.list[1],this.listText[2].innerHTML=e.list[2],this.bannerLogoImg.src=this.imgPath+e.bannerUrl,this.iosImg.src=this.imgPath+e.iosUrl,this.androidImg.src=this.imgPath+e.androidUrl,this.iconTitleText[0].innerHTML=e.icon.t[0],this.iconTitleText[1].innerHTML=e.icon.t[1],this.iconTitleText[2].innerHTML=e.icon.t[2],this.iconDescText[0].innerHTML=e.icon.d[0],this.iconDescText[1].innerHTML=e.icon.d[1],this.iconDescText[2].innerHTML=e.icon.d[2],this.slideTitleText[0].innerHTML=e.slide.t[0],this.slideTitleText[1].innerHTML=e.slide.t[1],this.slideTitleText[2].innerHTML=e.slide.t[2],this.slideDescText[0].innerHTML=e.slide.d[0],this.slideDescText[1].innerHTML=e.slide.d[1],this.slideDescText[2].innerHTML=e.slide.d[2],this.concatTitleText.innerHTML=e.concat.t,this.concatNameText.innerHTML=e.concat.name,this.concatDescText.innerHTML=e.concat.d,this.addressText.innerHTML=e.address,this.postText.innerHTML=e.post,this.copyrightText.innerHTML=e.cr,this.codeText.innerHTML=e.code,this.QRcodeImg.style.width=e.QRcode.width,this.QRcodeImg.src=this.imgPath+e.QRcode.url,this.joinLogoImg.src=this.imgPath+e.joinLogoUrl,this.joinImg.src=this.imgPath+e.joinUrl,this.teamDescText.innerHTML=e.teamDesc,this.fillJobInfo(),this.listSwitch()},fillJobInfo:function(){console.log(this.currentLang);var e=this.dictionary[this.currentLang].jobDetail,i="zh"==this.currentLang?"职责":"Responsibilities",t="zh"==this.currentLang?"要求":"Qualifications",n=e.map(function(e,n){var a=e.desc.map(function(e,i){return'<p class="t-gray">'+e+"</p>"});a=a.join("");var o=e.duty.map(function(e,i){return'<p class="t-gray">'+(i+1)+".  "+e+"</p>"});o=o.join("");var r=e.ask.map(function(e,i){return'<p class="t-gray">'+(i+1)+".  "+e+"</p>"});return r=r.join(""),"<section><h1>"+e.title+"</h1>"+a+'<p class="sc-t">'+i+"：</p>"+o+'<p class="sc-t">'+t+"：</p>"+r+"</section>"});n=n.join(""),this.deatilJoinArea.innerHTML=n},changePic:function(e){this.picList[this.currentPic].className="",e?this.currentPic++:this.currentPic--,this.currentPic<0?this.currentPic=2:this.currentPic>2&&(this.currentPic=0),this.picList[this.currentPic].className="active"}};var a=new n;a.init(),a.listBtn.onclick=function(){a.listSwitch()},a.pageLink[0].onclick=function(){a.turnPage(this)},a.pageLink[1].onclick=function(){a.turnPage(this)},a.langChange.onclick=function(){a.changeLang()},a.prevBtn.onclick=function(){a.changePic(!1)},a.nextBtn.onclick=function(){a.changePic(!0)}},function(e,i){}]);