(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+xcO":function(e){e.exports=JSON.parse('[{"id":1,"name":"San Francisco","length":25,"image":"https://images.unsplash.com/photo-1445294812422-0bb9cb94c286?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"From the Gold Rush through the Summer of Love, San Francisco\'s dynamic history and culture is celebrated in its ecelectic landmarks."},{"id":2,"name":"Philadelphia","length":19,"image":"https://images.unsplash.com/photo-1544295699-624f04212074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80","description":"Philadelphia was at the center of the formation of the United States.  On top of its rich socio-political history, the city has had a worldwide influence on the arts and holds top-notch educational institutions."}]')},"5zr1":function(e,i,t){"use strict";t.d(i,"a",(function(){return l}));var a=t("XNiG"),o=t("LRne"),s=t("LYzt"),r=t("+xcO"),n=t("fXoL"),h=t("tk/3");let l=(()=>{class e{constructor(e){this.http=e,this.routeProgressChange=new a.a,this.runHistoryChange=new a.a,this.runHistoryChange.subscribe(e=>{this.runHistory=e,console.log("Service run history change detected: "),console.log(this.runHistory)}),this.routeProgressChange.subscribe(e=>{this.routeProgress=e,console.log("Service route progress change detected: "),console.log(this.routeProgress)})}getAvailableRoutes(){return this.availableRoutes=[],r.forEach(e=>this.availableRoutes.push(e)),console.log(this.availableRoutes),Object(o.a)(this.availableRoutes)}startRoute(e,i,t,a){console.log("Setting route progress obj"),this.routeProgress={userId:i,routeId:e,routeName:t,finished:!1,distanceLogged:0,routeLength:a,percentComplete:0},this.routeProgressChange.next(this.routeProgress),console.log(this.routeProgress),this.runHistory=[],this.runHistoryChange.next(this.runHistory),localStorage.setItem("roofrat_routeProgress",JSON.stringify(this.routeProgress)),localStorage.setItem("roofrat_runHistory",JSON.stringify(this.runHistory))}addRun(e,i){return this.routeProgress||this.getRouteProgress().subscribe(e=>this.routeProgress=e),this.runHistory.push({date:e,distance:i}),this.runHistoryChange.next(this.runHistory),this.calculateDistanceLogged(this.runHistory)>=this.routeProgress.routeLength?(this.routeProgress=this.finishRoute(this.routeProgress),this.routeProgressChange.next(this.routeProgress)):(this.routeProgress.distanceLogged=this.calculateDistanceLogged(this.runHistory),this.routeProgress.percentComplete=this.calculatePercentComplete(this.routeProgress.distanceLogged,this.routeProgress.routeLength),this.routeProgressChange.next(this.routeProgress)),this.updateLocalStorage("roofrat_runHistory",this.runHistory),this.updateLocalStorage("roofrat_routeProgress",this.routeProgress),Object(o.a)(this.routeProgress)}deleteRun(e){this.runHistory.splice(e,1),this.runHistoryChange.next(this.runHistory),this.calculateDistanceLogged(this.runHistory)>=this.routeProgress.routeLength?this.routeProgress=this.finishRoute(this.routeProgress):(this.routeProgress.distanceLogged=this.calculateDistanceLogged(this.runHistory),this.routeProgress.percentComplete=this.calculatePercentComplete(this.routeProgress.distanceLogged,this.routeProgress.routeLength),this.routeProgressChange.next(this.routeProgress)),this.updateLocalStorage("roofrat_runHistory",this.runHistory),this.updateLocalStorage("roofrat_routeProgress",this.routeProgress)}getRunHistory(){return localStorage.getItem("roofrat_runHistory")?(this.runHistory=JSON.parse(localStorage.getItem("roofrat_runHistory")),Object(o.a)(this.runHistory)):(this.runHistory=[],this.updateLocalStorage("roofrat_runHistory",this.runHistory),Object(o.a)(this.runHistory))}getRouteProgress(){return this.routeProgress?Object(o.a)(this.routeProgress):localStorage.getItem("roofrat_routeProgress")?(this.routeProgress=JSON.parse(localStorage.getItem("roofrat_routeProgress")),this.routeProgressChange.next(this.routeProgress),Object(o.a)(this.routeProgress)):Object(o.a)(null)}clearRouteProgress(){return localStorage.removeItem("roofrat_routeProgress"),localStorage.removeItem("roofrat_runHistory"),this.runHistory=[],this.runHistoryChange.next(this.runHistory),this.routeProgress=null,this.routeProgressChange.next(this.routeProgress),this.routeProgress}finishRoute(e){return this.routeProgress.finished=!0,this.routeProgress.distanceLogged=e.routeLength,this.routeProgress.percentComplete=100,this.routeProgressChange.next(this.routeProgress),this.routeProgress}calculateDistanceLogged(e){let i=0;return e.forEach(e=>{i+=Number(e.distance)}),i}calculatePercentComplete(e,i){return Math.round(e/i*100)}updateLocalStorage(e,i){let t=JSON.stringify(i);localStorage.setItem(e,t)}getLandmarksList(){return this.landmarksList=[],s[0]["route"+this.routeProgress.routeId].forEach(e=>{e.mile<=this.routeProgress.distanceLogged&&this.landmarksList.push(e)}),this.landmarksList.sort((e,i)=>e.mile-i.mile),Object(o.a)(this.landmarksList)}getLandmark(e){let i;console.log(e);let t="route"+this.routeProgress.routeId;return console.log(t),s[0][t].forEach(t=>{if(t.id==e)return i=t,Object(o.a)(i)}),Object(o.a)(i)}}return e.\u0275fac=function(i){return new(i||e)(n.Qb(h.a))},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},LYzt:function(e){e.exports=JSON.parse('[{"route1":[{"id":1,"routeId":1,"name":"Mission Dolores","mile":0,"image":"https://thumbs.dreamstime.com/b/mission-dolores-late-th-century-catholic-church-san-francisco-city-s-oldest-standing-structure-48840574.jpg","image_attribute":"Dreamstime","img_att_link":"https://www.dreamstime.com/djschreiber_info","description":"Mission Dolores, actually named Mission San Francisco de Asis, is the oldest standing building in San Francisco.  It was built in 1776 and has survived multiple earthquakes and fires that wiped out other parts of the city."},{"id":2,"routeId":1,"name":"Union Square","mile":3.25,"image":"https://cdn.pixabay.com/photo/2014/09/04/21/49/union-square-435925__340.jpg","image_attribute":"Pixabay","img_att_link":"https://pixabay.com/photos/union-square-san-francisco-summer-435925/","description":"Union Square got its name from the anti-confederate congregations that took place there during the Civil War.  It\'s now a shopping and tourist hub and, during the holiday season, an ice skating rink where we can all live out New England winter dreams."},{"id":3,"routeId":1,"name":"Dragon\'s Gate","mile":3.5,"image":"https://images.unsplash.com/photo-1562008252-793937e6488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Kae Ng at Unsplash","img_att_link":"https://unsplash.com/photos/hlA67aj21mY","description":"The entrance to San Francisco\'s Chinatown from the south is ornately decorated and constructed with materials imported from China.  Commoners (that\'s you) pass through the two side passages, while nobles (or today, cars) pass through the center."},{"id":4,"routeId":1,"name":"Coit Tower","mile":5.3,"image":"https://images.unsplash.com/photo-1553922796-9ac61f7c71a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Ronan Furuta on Unsplash","img_att_link":"https://unsplash.com/@ronan18","description":"Unlike many historic landmarks, Coit Tower has never really served a useful purpose aside from looking cool as a tall tower on top of a big hill.  But it makes for a good uphill running destination and has killer views."},{"id":5,"routeId":1,"name":"Pier 39","mile":6.25,"image":"https://cdn.pixabay.com/photo/2020/03/31/11/48/seal-4987341__340.jpg","image_attribute":"Pixabay","img_att_link":"https://pixabay.com/photos/seal-san-francisco-california-usa-4987341/","description":"At Pier 39, you\'ll find an aquarium, a carousel, plenty of food options, and a highly vocal sea lion colony."},{"id":6,"routeId":1,"name":"Fisherman\'s Wharf","mile":6.5,"image":"https://images.unsplash.com/photo-1559530899-d09aefd8501c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Lago Godoy on Unsplash","img_att_link":"https://unsplash.com/@iago_godoy","description":"Home of clam chowder in a bread bowl and not far from Ghirardelli Square, a cable car turnaround, and the Buena Vista Cafe which claims to have perfected the recipe for Irish coffee."},{"id":7,"routeId":1,"name":"Alcatraz","mile":9,"image":"https://images.unsplash.com/photo-1501596224950-a41402fbc362?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Aldric Rivat on Unsplash","img_att_link":"https://unsplash.com/@aldric","description":"First a military lookout point, then a prison for war criminals, and then a high-security penitentiary.  It might be haunted by a number of ghosts, including those who escaped but were never found."},{"id":8,"routeId":1,"name":"Golden Gate Bridge","mile":11,"image":"https://images.unsplash.com/photo-1502774110791-3db58586fd74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","image_attribute":"Casey Horner on Unsplash","img_att_link":"https://unsplash.com/@mischievous_penguins","description":"Is it red?  Orange?  It\'s International Orange, in fact.  The color makes it more visible in the fog and, according to its architects, looks nice.  International Orange is also a common color in aerospace for its visibility."},{"id":9,"routeId":1,"name":"Ocean Beach","mile":15.5,"image":"https://cdn.pixabay.com/photo/2019/08/23/17/38/beach-4426135_1280.jpg","image_attribute":"Pixabay","img_att_link":"https://pixabay.com/photos/beach-san-francisco-california-4426135/","description":"While Ocean Beach might seem like an obvious name for a beach, in this case it differentiates San Francisco\'s western ocean-facing beach from the bay-facing coastlines to the north and east of the city.  If you haven\'t been here long, you might be surprised to find that this beach is usually windy, foggy, and chilly."},{"id":10,"routeId":1,"name":"Golden Gate Park","mile":16,"image":"https://images.unsplash.com/photo-1537384099489-f9b8ef30ab51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Kyle Glenn on Unsplash","img_att_link":"https://unsplash.com/@kylejglenn","description":"Golden Gate Park is huge, so this marker is simply where you turn into the park where it meets the beach.  You\'re greeted by a Dutch windmill, lush coastal greenery, and more fog."},{"id":11,"routeId":1,"name":"Bison Paddock","mile":16.5,"image":"https://cdn.pixabay.com/photo/2014/11/11/13/52/bison-526805_1280.jpg","image_attribute":"Pixabay","img_att_link":"https://pixabay.com/photos/bison-buffalo-american-animal-526805/","description":"Bison?  Yep.  Why?  Someone was afraid they might go extinct."},{"id":12,"routeId":1,"name":"De Young/Academy of Sciences","mile":18,"image":"https://images.unsplash.com/photo-1565086565717-351194b2488b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","image_attribute":"Claudia Lorusso on Unsplash","img_att_link":"https://unsplash.com/@claudialorux","description":"These two museums are just across a courtyard from each other.  The De Young, a fine art museum, can be recognized from far away by its observation deck poking over the tops of the park trees.  The California Academy of Sciences, a natural history museum and research institute, boasts a lush living roof, an albino alligator, and an indoor rainforest."},{"id":13,"routeId":1,"name":"Haight Street","mile":20.25,"image":"https://cdn.pixabay.com/photo/2016/06/16/00/19/haight-ashbury-1460224__480.jpg","image_attribute":"Pixabay","img_att_link":"https://pixabay.com/photos/haight-ashbury-intersection-1460224/","description":"Perhaps best known as the epicenter of San Francisco\'s hippie community in the 1960s, a trip down Haight Street now offers sights of Victorian and Ewardian architecture, coffe shops, restaurants, bars, and other entertainment.  There are certainly still some hippies to be found as well."},{"id":14,"routeId":1,"name":"Castro Theater","mile":22,"image":"https://images.unsplash.com/photo-1569848707917-59e1485852e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","image_attribute":"Guido Coppa on Unsplash","img_att_link":"https://unsplash.com/@gcoppa","description":"An ornate movie theater built in the 1920s, the Castro Theater is a central landmark to the surrounding Castro district.  The district was one of the first gay neighborhoods in the United States and continues to be a prominent symobl of LGBTQ+ activism worldwide."},{"id":15,"routeId":1,"name":"The Fillmore","mile":1.75,"image":"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","image_attribute":"Edward Cisneros on Unsplash","img_att_link":"https://unsplash.com/@everythingcaptured","description":"The Fillmore has been through many closings and reopenings while the surrounding neighborhood shifted dramatically through the 1900s.  It remains an awesome place to catch a show in an iconic yet intimate setting."},{"id":16,"routeId":1,"name":"Twin Peaks","mile":24,"image":"https://images.unsplash.com/photo-1581955754290-811cfb91c72e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","image_attribute":"Sophia Toussaint on Unsplash","img_att_link":"https://unsplash.com/@unigoatcatingo","description":"Your hard work running up this giant hill pays off in the form of sweeping 360-degree views of San Francisco and the surrounding area from the peaks near the city\'s geographic center.  Great work!"},{"id":17,"routeId":1,"name":"Japantown","mile":2,"image":"https://images.unsplash.com/photo-1579889327939-45de501326b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","image_attribute":"Ronan Furuta on Unsplash","img_att_link":"https://unsplash.com/@ronan18","description":"Japantown was built and settled in the early 1900s.  Originally the area primarily housed Japanese immigrants, but over time became home to many other immigrants as well.  The area is home to many Japanese restaurants and shops and hosts events such as an annual Cherry Blossom Festival."}],"route2":[{"id":22,"routeId":2,"name":"Mount Pleasant Mansion","mile":0,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/A572%2C_Mount_Pleasant_Mansion%2C_Fairmount_Park%2C_Philadelphia%2C_Pennsylvania%2C_United_States%2C_2017.jpg/1599px-A572%2C_Mount_Pleasant_Mansion%2C_Fairmount_Park%2C_Philadelphia%2C_Pennsylvania%2C_United_States%2C_2017.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:A572,_Mount_Pleasant_Mansion,_Fairmount_Park,_Philadelphia,_Pennsylvania,_United_States,_2017.jpg","description":"A Georgian mansion built in the 1700s by a pirate who, according to John Adams, had an arm twice shot off.  Does this mean his arm was shot off and reattached, or both arms were shot off? The mansion was later owned and inhabited by Benedict Arnold and Benjamin Franklin\'s grandnephew."},{"id":23,"routeId":2,"name":"John Coltrane House","mile":0.6,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paolo_Steffan%2C_Portrait_of_John_Coltrane_-_2007.jpg/822px-Paolo_Steffan%2C_Portrait_of_John_Coltrane_-_2007.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Paolo_Steffan,_Portrait_of_John_Coltrane_-_2007.jpg","description":"This house on 33rd street was home to the famed jazz musician John Coltrane.  The John W. Coltrane Cultural Society now operates in a building adjacent to the house, conducting children\'s jazz workshops throughout the city."},{"id":24,"routeId":2,"name":"Boathouse Row","mile":1.5,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Boathouse_Row-zoom.JPG/1600px-Boathouse_Row-zoom.JPG","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Boathouse_Row-zoom.JPG","description":"The boathouses along the Schuylkill bank of Fairmount Park house a number of major rowing regattas from the area.  The nearby Fairmount Dam provides for quiet waters that are ideal for rowing.  However, these placid conditions also created a mosquito breeding ground, which drove away wealthy homeowners in the mid-1800s and led to the city\'s acquisition of the abandoned estates."},{"id":25,"routeId":2,"name":"Fairmount Water Works","mile":2,"image":"https://images.unsplash.com/photo-1544295699-624f04212074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Chris Murray on Unsplash","img_att_link":"https://unsplash.com/@seemurray","description":"Fairmount Water Works was constructed in the early 1800s to save the city from a series of yellow fever epidemics and provide a reliable source of water to residents.  The facility developed cutting-edge water purification and distribution technology and happened to also be aesthetically pleasing."},{"id":26,"routeId":2,"name":"Philadelphia Museum of Art","mile":2.3,"image":"https://cdn.pixabay.com/photo/2020/05/09/14/03/philadelphia-5149807__340.jpg","image_attribute":"Bruce Emmerling on Pixabay","img_att_link":"https://pixabay.com/photos/philadelphia-art-museum-architecture-5149807/","description":"You\'re probably familiar with the iconic steps made famous by Rocky running up them as part of his boxing training.  The giant museum holds more than 240,000 objects from European and Asian collections."},{"id":27,"routeId":2,"name":"Rodin Museum","mile":2.4,"image":"https://images.unsplash.com/photo-1544609569-2e64f14008f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","image_attribute":"Valentin B. Kremer on Unsplash","img_att_link":"https://unsplash.com/@vbk_media","description":"The Rodin museum and garden are technically an annex of the Philadelphia Museum of Art, located just down Benjamin Franklin Parkway from the main museum building.  The garden features a number of Aguste Rodin\'s famous statues and the main entrance is adorned by the first bronze cast of The Gates of Hell."},{"id":28,"routeId":2,"name":"Barnes Foundation","mile":2.8,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Barnes_gallery_interior.jpg/1600px-Barnes_gallery_interior.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Barnes_gallery_interior.jpg","description":"The Barnes Foundation holds thousands of paintings and other works of art.  It was established by Albert C. Barnes, who had a lot of opinions about what would happen to the collection after his death.  Some of these stipulations proved to form a challenge to keeping the foundation alive, like limiting the availability of the museum to visitors, and to be respectfully revisited."},{"id":29,"routeId":2,"name":"Pennyslvania Academy of the Fine Arts","mile":3.7,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pennsylvania_Academy_of_the_Fine_Arts_in_Philadelphia.jpg/900px-Pennsylvania_Academy_of_the_Fine_Arts_in_Philadelphia.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Pennsylvania_Academy_of_the_Fine_Arts_in_Philadelphia.jpg","description":"The PAFA was the first art museum and school in the U.S., founded in 1805.  The Academy made particular contributions to women\'s growing involvement in art in the mid-1800s.  Women were given exclusive access to work spaces at specific times and were later allowed to work from live nude models of both genders - a controversial allowance at the time."},{"id":30,"routeId":2,"name":"Reading Terminal","mile":3.9,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Reading_Terminal_Market.jpg/1600px-Reading_Terminal_Market.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Reading_Terminal_Market.jpg","description":"Reading (pronounced more like \'redding\') Terminal was constructed to house a train depot and station as well as the company headquarters for the Philadelphia and Reading Railway.  There was a long-standing open-air market already in operation in 1889 when the company made its plans for the building, and many residents complained about the market\'s dissolution.  To compromise, the railroad agreed to purchase the market as well and relocate it to one end of the building, ultimately requiring the trainshed and tracks to be placed one level above the street."},{"id":31,"routeId":2,"name":"African American Museum of Philadelphia","mile":4.2,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/African_American_Museum_in_Philadelphia.jpg/1600px-African_American_Museum_in_Philadelphia.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:African_American_Museum_in_Philadelphia.jpg","description":"The AAMP was the first Black American museum funded and built by a municipality.  The museum opened in 1976 and is located a few blocks from the iconic Liberty Bell.  The collection of more than 750,000 objects includes memorabilia and artifacts of the Philadelphia Black Panthers, the Civil Rights movement, and iconic Black Americans."},{"id":32,"routeId":2,"name":"Edgar Allan Poe House","mile":4.5,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Edal_359.jpg/1600px-Edal_359.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Edal_359.jpg","description":"Edgar Allan Poe lived in several houses over his seven years in Philadelphia, but this is the only one still standing.  Some of his most well-known works, such as The Tell-Tale Heart, were written while Poe lived in Philadelphia.  Poe lived in the house now marked as a National Historic Site along with his wife/cousin and mother-in-law/aunt (yes, you read that right) for only a year or less before moving to New York.  Their short tenure may or may not have had something to do with Poe\'s reputation for tardy rent payments."},{"id":33,"routeId":2,"name":"U.S. Mint","mile":5.5,"image":"https://upload.wikimedia.org/wikipedia/commons/b/ba/Ye_Olde_Mint%2C1792.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Ye_Olde_Mint,1792.jpg","description":"The Philadelphia Mint was the first mint in the U.S. and is now one of four operating facilities.  The Coinage Act of 1792 ordered the creation of the mint; Philadelphia was the nation\'s capital at the time, so naturally, the mint went there.  The Coinage Act also specified the dollar unit and metallic composition of each coin.  Liberty was very on trend at the time, so it also required each coin sport an \'impression emblematic of liberty\'."},{"id":34,"routeId":2,"name":"Elfreth\'s Alley","mile":5.8,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Elfreth%27s_Alley.JPG/1920px-Elfreth%27s_Alley.JPG","image_attribute":"Mr. Kjetil Ree. - Own work, CC BY-SA 3.0","img_att_link":"https://commons.wikimedia.org/w/index.php?curid=1708717","description":"Elfreth\'s Alley is a small cobblestone street comprised of rare preservations of 18th-century working-class housing.  Many mansions of the same era still stand, but the less grand residential buildings have largely been demolished or rebuilt.  The oldest houses on Elfreth\'s Alley date back to 1703.  Their preservation is the result of a grassroots effort that began in the 1920s.  Details on dates and residents are somewhat vague, but the street was home to trade workers and several waves of immigrants."},{"id":35,"routeId":2,"name":"Benjamin Franklin\'s Grave","mile":6,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/1024px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg","image_attribute":"Wikimedia","img_att_link":"https://commons.wikimedia.org/wiki/File:Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg","description":"Benjamin Franklin was an accomplished and highly influential Founding Father of the U.S., yet is often remembered by that one kite and lightning experiment that we\'re not sure he ever actually did and other people got electrocuted trying.  Regardless, he lies in rest here at Christ Church Burial Ground."},{"id":36,"routeId":2,"name":"Betsey Ross House","mile":6.1,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Betsy_Ross_House_239_Arch_Street.jpg/800px-Betsy_Ross_House_239_Arch_Street.jpg","image_attribute":"By Beyond My Ken - Own work, CC BY-SA 4.0","img_att_link":"https://commons.wikimedia.org/w/index.php?curid=18684641","description":"This Arch Street house is supposedly where Betsy Ross lived and sewed the first American flag.  But here\'s your most interesting letdown of the day: neither of those seems to be true.  While Ross was a public figure for women\'s contributions to the American Revolution and happened to also be an unpholsterer, there isn\'t any historical evidence to support the story of her as the flag\'s first seamstress or designer.  Also, the closest approximation of a house that Ross would have lived in is next to the existing landmark today."},{"id":37,"routeId":2,"name":"Liberty Bell","mile":6.5,"image":"https://upload.wikimedia.org/wikipedia/commons/8/8b/Bell_in_case.png","image_attribute":"Wikimedia","img_att_link":"https://en.wikipedia.org/wiki/Liberty_Bell#/media/File:Bell_in_case.png","description":"While the Liberty Bell has indeed come to be known as THE liberty bell, it started out as just one of a number of bells probably rung sometime in July of 1776.  (For liberty.)  This particular bell stuck around and actually got its name later, in the 1830s, from abolitionist groups who claimed it as a symbol of slave liberty.  The crack seems to have appeared in the late 1800s, when the City of Philadelphia routinely let the bell out on loan as a patriotic party prop."},{"id":38,"routeId":2,"name":"Carpenters\' Hall","mile":6.9,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Carpenters%27_Hall%2C_Philadelphia%2C_USA%2C_May_2015.jpg/1920px-Carpenters%27_Hall%2C_Philadelphia%2C_USA%2C_May_2015.jpg","image_attribute":"By Pbjamesphoto - Own work, CC BY-SA 4.0","img_att_link":"https://commons.wikimedia.org/w/index.php?curid=40075080","description":"Carpenters\' Hall was an important meeting place throughout the establishment of Pennsylvania and the U.S.  It was founded and is still owned by a carpenters\' guild, though it seems non-carpenters are allowed to meet and form states there."},{"id":39,"routeId":2,"name":"USS Olympia and USS Becuna","mile":7.5,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Becuna_Sub_Philly.jpg/1920px-Becuna_Sub_Philly.jpg","image_attribute":"Wikimedia","img_att_link":"https://en.wikipedia.org/wiki/USS_Becuna#/media/File:Becuna_Sub_Philly.jpg","description":"The USS Olympia is the oldest steel American warship still afloat  The ship served primarily as a training ship until World War I.  USS Becuna is a submarine that served in World War II and has since been on display at the Independence Seaport Museum."},{"id":40,"routeId":2,"name":"Hill-Physick House","mile":7.8,"image":"https://upload.wikimedia.org/wikipedia/commons/b/bb/Philip_Syng_Physick.jpg","image_attribute":"Wikimedia","img_att_link":"https://en.wikipedia.org/wiki/Philip_Syng_Physick#/media/File:Philip_Syng_Physick.jpg","description":"The Hill-Physick house is the former home of Philip Syng Physick, known as the father of American surgery.  He performed the first human blood transfusion in 1795 and pioneered many procedures and techniques.  His patients included James Madison\'s wife and Chief Justice John Marhsall, who reportedly had more than 1,000 kidney stones removed by Physick."},{"id":41,"routeId":2,"name":"Mother Bethel African Methodist Episcopal Church","mile":8.1,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Mother_Bethel_Philly_b.JPG/1920px-Mother_Bethel_Philly_b.JPG","image_attribute":"Wikimedia","img_att_link":"https://en.wikipedia.org/wiki/Mother_Bethel_A.M.E._Church#/media/File:Mother_Bethel_Philly_b.JPG","description":"Established in 1794, The Mother Bethel A.M.E. Church is the oldest African Methodist Episcopal congregation in the country, and its property is the oldest church to be continuously owned by Black Americans.  After the Civil War, missionaries from this church traveled to the South to help freed slaves and establish Black churches."},{"id":42,"routeId":2,"name":"Wilson Eyre House","mile":8.5,"image":"https://upload.wikimedia.org/wikipedia/commons/e/e5/WilsonEyre.jpg","image_attribute":"Wikimedia","img_att_link":"https://en.wikipedia.org/wiki/Wilson_Eyre#/media/File:WilsonEyre.jpg","description":"Architect Wilson Eyre lived in this nondescript historical landmark house from 1909 until 1944.  He didn\'t design or build it, but he did add the third story to it.  Eyre designed sprawling yet informal country houses, and later other buildings such as the Penn Museum.  Some of his basic components seem to have become building blocks for Frank Lloyd Wright\'s work, which rose to pominence shortly after Eyre\'s."},{"id":43,"routeId":2,"name":"Academy of Music","mile":8.9,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2013_Academy_of_Music_from_south.jpg/2560px-2013_Academy_of_Music_from_south.jpg","image_attribute":"By Beyond My Ken - Own work, CC BY-SA 4.0","img_att_link":"https://commons.wikimedia.org/w/index.php?curid=26417395","description":"The American Academy of Music is the oldest opera house in the U.S. still used for its original purpose.  The Academy was finished in 1857 and today is home to the Pennsylvania Ballet and the Opera Philadelphia."},{"id":44,"routeId":2,"name":"City Hall","mile":9,"image":"https://images.unsplash.com/photo-1517009572053-93fb56dfef49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","image_attribute":"Leo Serrat on Unsplash","img_att_link":"https://unsplash.com/@leoserrat","description":"The iconic statue of William Penn sits atop City Hall.  The building was the tallest habitable in the world from its creation in 1894 until 1908.  An informal agreement limited the height of buildings in City Center to be no taller than William Penn\'s hat, until the city\'s first skyscraper was constructed at One Liberty Place in 1986 that surpassed Penn\'s head by several stories."}],"route3":[{"id":18,"routeId":3,"name":"Churchill Downs","mile":0,"image":"https://images.unsplash.com/photo-1578082775190-25b6b9abc839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","image_attribute":"","img_att_link":"","description":"Churchill Downs is the location of the Kentucky Derby."},{"id":19,"routeId":3,"name":"Brown Hotel","mile":3,"image":"https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60","image_attribute":"","img_att_link":"","description":"The Brown Hotel is a historic site with top-class mixologists.  Here\'s how the pros make an Old Fashioned: ..."},{"id":20,"routeId":3,"name":"Bulleit Distillery","mile":30,"image":"https://images.unsplash.com/photo-1571104508999-893933ded431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","image_attribute":"","img_att_link":"","description":"Bulleit Rye is particularly delicious."},{"id":21,"routeId":3,"name":"Keeneland Race Track","mile":70,"image":"https://images.unsplash.com/photo-1510417769558-3ba40dfb4a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","image_attribute":"","img_att_link":"","description":"Keeneland race track is a race track near Lexington.  Here\'s their recipe for a mint julep."}]}]')}}]);