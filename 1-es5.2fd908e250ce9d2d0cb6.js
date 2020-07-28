function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+xcO":function(e){e.exports=JSON.parse('[{"id":1,"name":"San Francisco","length":25,"image":"https://images.unsplash.com/photo-1445294812422-0bb9cb94c286?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"From the Gold Rush through the Summer of Love, San Francisco\'s dynamic history and culture is celebrated in its ecelectic landmarks."},{"id":2,"name":"Philadelphia","length":19,"image":"https://images.unsplash.com/photo-1544295699-624f04212074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80","description":"Philadelphia was at the center of the formation of the United States.  On top of its rich socio-political history, the city has had a worldwide influence on the arts and holds top-notch educational institutions."}]')},"5zr1":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var o=i("XNiG"),a=i("LRne"),r=i("LYzt"),s=i("+xcO"),n=i("fXoL"),h=i("tk/3"),c=function(){var e=function(){function e(t){var i=this;_classCallCheck(this,e),this.http=t,this.routeProgressChange=new o.a,this.runHistoryChange=new o.a,this.runHistoryChange.subscribe((function(e){i.runHistory=e,console.log("Service run history change detected: "),console.log(i.runHistory)})),this.routeProgressChange.subscribe((function(e){i.routeProgress=e,console.log("Service route progress change detected: "),console.log(i.routeProgress)}))}return _createClass(e,[{key:"getAvailableRoutes",value:function(){var e=this;return this.availableRoutes=[],s.forEach((function(t){return e.availableRoutes.push(t)})),console.log(this.availableRoutes),Object(a.a)(this.availableRoutes)}},{key:"startRoute",value:function(e,t,i,o){return this.routeProgress={userId:t,routeId:e,routeName:i,finished:!1,distanceLogged:0,routeLength:o,percentComplete:0},this.routeProgressChange.next(this.routeProgress),console.log(this.routeProgress),this.runHistory=[],this.runHistoryChange.next(this.runHistory),localStorage.setItem("roofrat_routeProgress",JSON.stringify(this.routeProgress)),localStorage.setItem("roofrat_runHistory",JSON.stringify(this.runHistory)),console.log(this.routeProgress),Object(a.a)(this.routeProgress)}},{key:"addRun",value:function(e,t){var i=this;return this.routeProgress||this.getRouteProgress().subscribe((function(e){return i.routeProgress=e})),this.runHistory.push({date:e,distance:t}),this.runHistoryChange.next(this.runHistory),this.calculateDistanceLogged(this.runHistory)>=this.routeProgress.routeLength?(this.routeProgress=this.finishRoute(this.routeProgress),this.routeProgressChange.next(this.routeProgress)):(this.routeProgress.distanceLogged=this.calculateDistanceLogged(this.runHistory),this.routeProgress.percentComplete=this.calculatePercentComplete(this.routeProgress.distanceLogged,this.routeProgress.routeLength),this.routeProgressChange.next(this.routeProgress)),this.updateLocalStorage("roofrat_runHistory",this.runHistory),this.updateLocalStorage("roofrat_routeProgress",this.routeProgress),Object(a.a)(this.routeProgress)}},{key:"deleteRun",value:function(e){this.runHistory.splice(e,1),this.runHistoryChange.next(this.runHistory),this.calculateDistanceLogged(this.runHistory)>=this.routeProgress.routeLength?this.routeProgress=this.finishRoute(this.routeProgress):(this.routeProgress.distanceLogged=this.calculateDistanceLogged(this.runHistory),this.routeProgress.percentComplete=this.calculatePercentComplete(this.routeProgress.distanceLogged,this.routeProgress.routeLength),this.routeProgressChange.next(this.routeProgress)),this.updateLocalStorage("roofrat_runHistory",this.runHistory),this.updateLocalStorage("roofrat_routeProgress",this.routeProgress)}},{key:"getRunHistory",value:function(){return localStorage.getItem("roofrat_runHistory")?(this.runHistory=JSON.parse(localStorage.getItem("roofrat_runHistory")),Object(a.a)(this.runHistory)):(this.runHistory=[],this.updateLocalStorage("roofrat_runHistory",this.runHistory),Object(a.a)(this.runHistory))}},{key:"getRouteProgress",value:function(){return this.routeProgress?Object(a.a)(this.routeProgress):localStorage.getItem("roofrat_routeProgress")?(this.routeProgress=JSON.parse(localStorage.getItem("roofrat_routeProgress")),Object(a.a)(this.routeProgress)):Object(a.a)(null)}},{key:"clearRouteProgress",value:function(){return localStorage.removeItem("roofrat_routeProgress"),localStorage.removeItem("roofrat_runHistory"),this.runHistory=[],this.runHistoryChange.next(this.runHistory),this.routeProgress=null,this.routeProgressChange.next(this.routeProgress),this.routeProgress}},{key:"finishRoute",value:function(e){return this.routeProgress.finished=!0,this.routeProgress.distanceLogged=e.routeLength,this.routeProgress.percentComplete=100,this.routeProgressChange.next(this.routeProgress),this.routeProgress}},{key:"calculateDistanceLogged",value:function(e){var t=0;return e.forEach((function(e){t+=Number(e.distance)})),t}},{key:"calculatePercentComplete",value:function(e,t){return Math.round(e/t*100)}},{key:"updateLocalStorage",value:function(e,t){var i=JSON.stringify(t);console.log(t),console.log(i),localStorage.setItem(e,i)}},{key:"getLandmarksList",value:function(){var e=this;return this.landmarksList=[],r[0]["route"+this.routeProgress.routeId].forEach((function(t){t.mile<=e.routeProgress.distanceLogged&&e.landmarksList.push(t)})),this.landmarksList.sort((function(e,t){return e.mile-t.mile})),Object(a.a)(this.landmarksList)}},{key:"getLandmark",value:function(e){var t;console.log(e);var i="route"+this.routeProgress.routeId;return console.log(i),r[0][i].forEach((function(i){if(i.id==e)return t=i,Object(a.a)(t)})),Object(a.a)(t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Qb(h.a))},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},LYzt:function(e){e.exports=JSON.parse('[{"route1":[{"id":1,"routeId":1,"name":"Mission Dolores","mile":0,"image":"https://thumbs.dreamstime.com/b/mission-dolores-late-th-century-catholic-church-san-francisco-city-s-oldest-standing-structure-48840574.jpg","description":"Mission Dolores, actually named Mission San Francisco de Asis, is the oldest standing building in San Francisco.  It was built in 1776 and has survived multiple earthquakes and fires that wiped out other parts of the city."},{"id":2,"routeId":1,"name":"Union Square","mile":3.25,"image":"https://cdn.pixabay.com/photo/2014/09/04/21/49/union-square-435925__340.jpg","description":"Union Square got its name from the anti-confederate congregations that took place there during the Civil War.  It\'s now a shopping and tourist hub and, during the holiday season, an ice skating rink where we can all live out New England winter dreams."},{"id":3,"routeId":1,"name":"Dragon\'s Gate","mile":3.5,"image":"https://images.unsplash.com/photo-1562008252-793937e6488f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"The entrance to San Francisco\'s Chinatown from the south is ornately decorated and constructed with materials imported from China.  Commoners (that\'s you) pass through the two side passages, while nobles (or today, cars) pass through the center."},{"id":4,"routeId":1,"name":"Coit Tower","mile":5.3,"image":"https://images.unsplash.com/photo-1553922796-9ac61f7c71a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Unlike many historic landmarks, Coit Tower has never really served a useful purpose aside from looking cool as a tall tower on top of a big hill.  But it makes for a good uphill running destination and has killer views."},{"id":5,"routeId":1,"name":"Pier 39","mile":6.25,"image":"https://cdn.pixabay.com/photo/2020/03/31/11/48/seal-4987341__340.jpg","description":"At Pier 39, you\'ll find an aquarium, a carousel, plenty of food options, and a startlingly vocal sea lion colony."},{"id":6,"routeId":1,"name":"Fisherman\'s Wharf","mile":6.5,"image":"https://images.unsplash.com/photo-1559530899-d09aefd8501c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Home of clam chowder in a bread bowl and not far from Ghirardelli Square, a cable car turnaround, and the Buena Vista Cafe which claims to have perfected the recipe for Irish coffee."},{"id":7,"routeId":1,"name":"Alcatraz","mile":9,"image":"https://images.unsplash.com/photo-1587539975162-b3857b7284d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"First a military lookout point, then a prison for war criminals, and then a high-security penitentiary.  It might be haunted by a number of ghosts, including those who escaped but were never found."},{"id":8,"routeId":1,"name":"Golden Gate Bridge","mile":11,"image":"https://images.unsplash.com/photo-1524523762086-bcecce3611f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Is it red?  Orange?  It\'s International Orange, in fact.  The color makes it more visible in the fog and, according to its architects, looks nice.  International Orange is also a common color in aerospace for its visibility."},{"id":9,"routeId":1,"name":"Ocean Beach","mile":15.5,"image":"https://cdn.pixabay.com/photo/2013/12/07/02/50/ocean-beach-224410__340.jpg","description":"While Ocean Beach might seem like an obvious name for a beach, in this case it differentiates San Francisco\'s western ocean-facing beach from the bay-facing coastlines to the north and east of the city.  If you haven\'t been here long, you might be surprised to find that this beach is usually windy, foggy, and chilly."},{"id":10,"routeId":1,"name":"Golden Gate Park","mile":16,"image":"https://images.unsplash.com/photo-1537384099489-f9b8ef30ab51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Golden Gate Park is huge, so this marker is simply where you turn into the park where it meets the beach.  You\'re greeted by a Dutch windmill, lush coastal greenery, and more fog."},{"id":11,"routeId":1,"name":"Bison Paddock","mile":16.5,"image":"https://cdn.pixabay.com/photo/2018/11/17/15/49/bison-3821338__340.jpg","description":"Bison?  Yep.  Why?  Someone was afraid they might go extinct."},{"id":12,"routeId":1,"name":"De Young/Academy of Sciences","mile":18,"image":"https://images.unsplash.com/photo-1565086565717-351194b2488b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","description":"These two museums are just across a courtyard from each other.  The De Young, a fine art museum, can be recognized from far away by its observation deck poking over the tops of the park trees.  The California Academy of Sciences, a natural history museum and research institute, boasts a lush living roof, an albino alligator, and an indoor rainforest."},{"id":13,"routeId":1,"name":"Haight Street","mile":20.25,"image":"https://cdn.pixabay.com/photo/2016/06/16/00/19/haight-ashbury-1460224__480.jpg","description":"Perhaps best known as the epicenter of San Francisco\'s hippie community in the 1960s, a trip down Haight Street now offers sights of Victorian and Ewardian architecture, coffe shops, restaurants, bars, and other entertainment.  There are certainly still some hippies to be found as well."},{"id":14,"routeId":1,"name":"Castro Theater","mile":22,"image":"https://images.unsplash.com/photo-1569848707917-59e1485852e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","description":"An ornate movie theater built in the 1920s, the Castro Theater is a central landmark to the surrounding Castro district.  The district was one of the first gay neighborhoods in the United States and continues to be a prominent symobl of LGBTQ+ activism worldwide."},{"id":15,"routeId":1,"name":"The Fillmore","mile":1.75,"image":"https://images.unsplash.com/photo-1518553343323-b5547b620030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"The Fillmore has been through many closings and reopenings while the surrounding neighborhood shifted dramatically through the 1900s.  It remains an awesome place to catch a show in an iconic yet intimate setting."},{"id":16,"routeId":1,"name":"Twin Peaks","mile":24,"image":"https://images.unsplash.com/photo-1581955754290-811cfb91c72e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","description":"Your hard work running up this giant hill pays off in the form of sweeping 360-degree views of San Francisco and the surrounding area from the peaks near the city\'s geographic center.  Great work!"},{"id":17,"routeId":1,"name":"Japantown","mile":2,"image":"https://images.unsplash.com/photo-1579889327939-45de501326b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","description":"Japantown was built and settled in the early 1900s.  Originally the area primarily housed Japanese immigrants, but over time became home to many other immigrants as well.  The area is home to many Japanese restaurants and shops and hosts events such as an annual Cherry Blossom Festival."}],"route2":[{"id":22,"routeId":2,"name":"Mount Pleasant Mansion","mile":0,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"A Georgian mansion built in the 1700s by a pirate who, according to John Adams, had an arm twice shot off.  The mansion was later owned and inhabited by Benedict Arnold and Benjamin Franklin\'s grandnephew."},{"id":23,"routeId":2,"name":"John Coltrane House","mile":0.6,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"This house on 33rd street was home to the famed jazz musician John Coltrane.  The John W. Coltrane Cultural Society now operates in a building adjacent to the house, conducting children\'s jazz workshops throughout the city."},{"id":24,"routeId":2,"name":"Boathouse Row","mile":1.5,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"The boathouses along the Schuylkill bank of Fairmount Park house a number of major rowing regattas from the area.  The nearby Fairmount Dam provides for quiet waters that are ideal for rowing.  However, these placid conditions also created a mosquito breeding ground, which drove away wealthy homeowners in the mid-1800s and led to the city\'s acquisition of the abandoned estates."},{"id":25,"routeId":2,"name":"Fairmount Water Works","mile":2,"image":"https://images.unsplash.com/photo-1544295699-624f04212074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Fairmount Water Works was constructed in the early 1800s to save the city from a series of yellow fever epidemics and provide a reliable source of water to residents.  The facility developed cutting-edge water purification and distribution technology and happened to also be aesthetically pleasing."},{"id":26,"routeId":2,"name":"Philadelphia Museum of Art","mile":2.3,"image":"https://cdn.pixabay.com/photo/2020/05/09/14/03/philadelphia-5149807__340.jpg","description":"You\'re probably familiar with the iconic steps made famous by Rocky running up them as part of his boxing training.  The giant museum holds more than 240,000 objects from European and Asian collections."},{"id":27,"routeId":2,"name":"Rodin Museum","mile":2.4,"image":"https://images.unsplash.com/photo-1544609569-2e64f14008f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"The Rodin museum and garden are technically an annex of the Philadelphia Museum of Art, located just down Benjamin Franklin Parkway from the main museum building.  The garden features a number of Aguste Rodin\'s famous statues and the main entrance is adorned by the first bronze cast of The Gates of Hell."},{"id":28,"routeId":2,"name":"Barnes Foundation","mile":2.8,"image":"https://images.unsplash.com/photo-1524014444623-194fde519952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"The Barnes Foundation holds thousands of paintings and other works of art.  It was established by Albert C. Barnes, who had a lot of opinions about what would happen to the collection after his death.  Some of these stipulations proved to form a challenge to keeping the foundation alive, like limiting the availability of the museum to visitors, and to be respectfully revisited."},{"id":29,"routeId":2,"name":"Pennyslvania Academy of the Fine Arts","mile":3.7,"image":"https://cdn.pixabay.com/photo/2017/06/16/22/58/art-2410613__480.jpg","description":"The PAFA was the first art museum and school in the U.S., founded in 1805.  The Academy made particular contributions to women\'s growing involvement in art in the mid-1800s.  Women were given exclusive access to work spaces at specific times and were later allowed to work from live nude models of both genders - a controversial allowance at the time.  "},{"id":30,"routeId":2,"name":"Reading Terminal","mile":3.9,"image":"https://cdn.pixabay.com/photo/2017/07/23/17/42/reading-terminal-market-2532030__480.jpg","description":"Description goes here"},{"id":31,"routeId":2,"name":"African American Museum of Philadelphia","mile":4.2,"image":"https://images.unsplash.com/photo-1592530392525-9d8469678dac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Description goes here"},{"id":32,"routeId":2,"name":"Edgar Allan Poe House","mile":4.5,"image":"https://images.unsplash.com/photo-1550229055-4ad2531aa9dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Description goes here"},{"id":33,"routeId":2,"name":"U.S. Mint","mile":5.5,"image":"https://images.unsplash.com/photo-1579267130459-500e662b083a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Description goes here"},{"id":34,"routeId":2,"name":"Elfreth\'s Alley","mile":5.8,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":35,"routeId":2,"name":"Benjamin Franklin\'s Grave","mile":6,"image":"https://cdn.pixabay.com/photo/2012/10/25/23/17/benjamin-franklin-62846__340.jpg","description":"Description goes here"},{"id":36,"routeId":2,"name":"Betsey Ross House","mile":6.1,"image":"https://images.unsplash.com/photo-1478995222776-1b46bd4551dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Description goes here"},{"id":37,"routeId":2,"name":"Liberty Bell","mile":6.5,"image":"https://images.unsplash.com/photo-1566832957638-dab4c15d1cd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Description goes here"},{"id":38,"routeId":2,"name":"Carpenters\' Hall","mile":6.9,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":39,"routeId":2,"name":"USS Olympia and USS Becuna","mile":7.5,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":40,"routeId":2,"name":"Hill-Physick House","mile":7.8,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":41,"routeId":2,"name":"Mother Bethel AME Church","mile":8.1,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":42,"routeId":2,"name":"Wilson Eyre House","mile":8.5,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":43,"routeId":2,"name":"Academy of Music","mile":8.9,"image":"https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Description goes here"},{"id":44,"routeId":2,"name":"City Hall","mile":9,"image":"https://images.unsplash.com/photo-1517009572053-93fb56dfef49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60","description":"Description goes here"}],"route3":[{"id":18,"routeId":3,"name":"Churchill Downs","mile":0,"image":"https://images.unsplash.com/photo-1578082775190-25b6b9abc839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Churchill Downs is the location of the Kentucky Derby."},{"id":19,"routeId":3,"name":"Brown Hotel","mile":3,"image":"https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60","description":"The Brown Hotel is a historic site with top-class mixologists.  Here\'s how the pros make an Old Fashioned: ..."},{"id":20,"routeId":3,"name":"Bulleit Distillery","mile":30,"image":"https://images.unsplash.com/photo-1571104508999-893933ded431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Bulleit Rye is particularly delicious."},{"id":21,"routeId":3,"name":"Keeneland Race Track","mile":70,"image":"https://images.unsplash.com/photo-1510417769558-3ba40dfb4a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60","description":"Keeneland race track is a race track near Lexington.  Here\'s their recipe for a mint julep."}]}]')}}]);