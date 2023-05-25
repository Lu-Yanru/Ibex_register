PennController.ResetPrefix( null );
//AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
//PennController.InitiateRecorder( "https://amor.cms.hu-berlin.de/~idslfahm/recordings/Recording.php").label( "init" );
PennController.DebugOff()




//order of main blocks can be changed here
PennController.Sequence("test_scale", "test_forcedchoice",  "send", "end" )
//"intro", "PersonalData", "hinweise",



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Introduction HTML


PennController("intro",

             newHtml("intro", "example_intro.html")
             .print()

             ,

             newCanvas("space1", 1, 125)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Clickworker ID


PennController("PersonalData",



               newText("EnterData", "Zun&auml;chst ein paar Angaben zu deiner Person!")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               //newTextInput("ID", "")
               //.settings.log()

               //,

               //newText("IDtext", "Clickworker ID:")
               //.settings.css("font-size", "18px")

               //,

               //newCanvas("IDcanvas", 600, 45)
               //.add(0, 20, getText("IDtext"))
               //.add(200, 23, getTextInput("ID"))
               //.print()

               //,

               newDropDown("language", "")
               .settings.log("last")
               .add( "Deutsch" , "Deutsch und andere Sprache(n) vor dem 5.Lebensjahr" , "andere" )

               ,

               newText("languagetext", "Muttersprache:")
               .settings.css("font-size", "18px")

               ,


               newCanvas("languagecanvas", 600, 35)
               .add(0, 20, getText("languagetext"))
               .add(200, 23, getDropDown("language"))
               .print()

               ,

               newDropDown("gender", "")
               .settings.log("last")
               .add( "weiblich" , "m&auml;nnlich" , "divers" )

               ,

               newText("gendertext", "Geschlecht:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("gendercanvas", 600, 35)
               .add(0, 20, getText("gendertext"))
               .add(200, 23, getDropDown("gender"))
               .print()

               ,


               newDropDown("age", "")
               .settings.log("last")
               .add( "17 oder j&uuml;nger" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33 oder &auml;lter" )

               ,

               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("agecanvas", 600, 35)
               .add(0, 20, getText("agetext"))
               .add(200, 23, getDropDown("age"))
               .print()

               ,

               newDropDown("browser", "")
               .settings.log("last")
               .add( "Safari" , "Firefox" , "Chrome", "Internet Explorer", "Microsoft Edge", "anderer" )

               ,

               newText("browsertext", "Verwendeter Browser:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("browsercanvas", 600, 35)
               .add(0, 20, getText("browsertext"))
               .add(200, 23, getDropDown("browser"))
               .print()

               ,

               newCanvas("space3", 1, 155)
               .print()

               ,

               newButton("weiter", "weiter")
               .settings.center()
               .print()
               .wait(getDropDown("age")
                     .test.selected("18")
                     .or( getDropDown("age")
                        .test.selected("19")
                        .or( getDropDown("age")
                           .test.selected("20")
                           .or( getDropDown("age")
                             .test.selected("21")
                             .or( getDropDown("age")
                               .test.selected("22")
                               .or( getDropDown("age")
                                 .test.selected("23")
                                 .or( getDropDown("age")
                                   .test.selected("24")
                                   .or( getDropDown("age")
                                     .test.selected("25")
                                     .or( getDropDown("age")
                                       .test.selected("26")
                                       .or( getDropDown("age")
                                         .test.selected("27")
                                         .or( getDropDown("age")
                                           .test.selected("28")
                                           .or( getDropDown("age")
                                            .test.selected("29")
                                            .or( getDropDown("age")
                                              .test.selected("30")
                                              .or( getDropDown("age")
                                                .test.selected("31")
                                                .or( getDropDown("age")
                                                  .test.selected("32")
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )// ende age scale


                     .and(getDropDown("language")
                       .test.selected("Deutsch")
                       .or(getDropDown("language")
                         .test.selected("Deutsch und andere Sprache(n) vor dem 5.Lebensjahr")

                          )
                          ) //ende language scale

                     .and(getDropDown("gender")
                       .test.selected("m&auml;nnlich")
                       .or(getDropDown("gender")
                         .test.selected("weiblich")
                         .or(getDropDown("gender")
                           .test.selected("divers")
                          )
                          )
                          ) //ende gender scale

                      .and(getDropDown("browser")
                        .test.selected("Safari")
                        .or(getDropDown("browser")
                          .test.selected("Firefox")
                          .or(getDropDown("browser")
                            .test.selected("Chrome")
                            .or(getDropDown("browser")
                              .test.selected("Internet Explorer")
                              .or(getDropDown("browser")
                                .test.selected("Microsoft Edge")
                                .or(getDropDown("browser")
                                  .test.selected("anderer")
                           )
                           )
                           )
                           )
                           )
                           ) //ende browser scale


                      //.and(getTextInput("ID")
                      //  .test.text(/^\d+$/)
                        //   )



                     //.success()
                     //.failure(

                      //   getButton("weiter")
                        // .remove()
                         //,
                         //newText("bye", "Du kannst leider nicht an dem Experiment teilnehmen, da deine Angaben nicht mit denen bei Clickworker &uuml;bereinstimmen oder du nicht alle Angaben eingegeben hast.")
                         //.color("red")
                         //.print()

                        //     ) //ende failure

                    ) // ende wait

               ,

               //newVar("ID")
               //.settings.global()
               //.set( getTextInput("ID") )

               //,

               newVar("gender")
               .settings.global()
               .set( getDropDown("gender") )

               ,

               newVar("age")
               .settings.global()
               .set( getDropDown("age") )

               ,

               newVar("language")
               .settings.global()
               .set( getDropDown("language") )

               ,

               newVar("browser")
               .settings.global()
               .set( getDropDown("browser") )

     )

    .setOption("hideProgressBar", "true")
    //.log( "ID" ,       getVar("ID"))
    .log( "gender" ,   getVar("gender"))
    .log( "age" ,      getVar("age"))
    .log( "language" , getVar("language"))
    .log( "browser" ,  getVar("browser"))


    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Hinweise HTML

PennController("hinweise",

             newHtml("Hinweise_html.html")
             .print()

             ,

             newCanvas("space1", 1, 160)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;


    PennController("test_scale",

                 newText("text", "Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et nisl hendrerit mollis.")
                 .settings.css("font-size", "medium")

                 ,

                 newCanvas("textcanvas", 800, 150)
                 .add(0,0, getText("text"))
                 .print()
                 ,

                 //newText("scaleValue", "NA").before( newText("Score: ") )
                 //,

                 newScale("feature1", 100)
                 .center()
                 .slider()
                 .size(500).css("max-width", "unset")
                 .before(newText("feature1a"))
                 .after(newText("feature1b"))
                 //.callback( getText("scaleValue").text(getScale("feature1")) )
                 .log("last")
                 .print()
                 ,
                 //getText("scaleValue")
                 //.print()
                 //,
                 newScale("feature2", 100)
                 .center()
                 .slider()
                 .size(500).css("max-width", "unset")
                 .before(newText("feature2a"))
                 .after(newText("feature2b"))
                 .log("last")
                 .print()
                 ,
                 newScale("feature3", 100)
                 .center()
                 .slider()
                 .size(500).css("max-width", "unset")
                 .before(newText("feature3a"))
                 .after(newText("feature3b"))
                 .log("last")
                 .print()
                 ,
                 newButton("weiter", "weiter")
                 .center()
                 .print()
                 .wait()


        )

        .setOption("hideProgressBar", "true")
        ;

PennController("test_forcedchoice",

              newHtml("Hinweise_html.html")
              .print()

              ,

              newCanvas("space1", 1, 160)
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()


            )

            .setOption("hideProgressBar", "true")
            ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization_Start





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Test_familiarization


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice1




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice1




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice2




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice2




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Main




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Main





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Questions

PennController("question1",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein schwarzer Tisch gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;


PennController("question2",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine braune Nuss gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question3",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein wei&szlig;er Brief gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;


PennController("question4",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein brauner Anzug gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question5",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine wei&szlig;e Raupe gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question6",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine braune Geige gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question7",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein schwarzer Ring gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question8",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde eine rote Krone gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question9",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein schwarzes Klavier gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;

PennController("question10",

              newText("Nein", "<small>Nein [F]</small>")
              .settings.center()
              .settings.after(newText("Ja", "<small>Ja [J]</small>").settings.css("padding-left", "100pt").settings.css("font-size", "18px"))
              .settings.css("font-size", "medium")
              ,
              newCanvas("questioncanvas", 800, 400)
              .add(250,50, newText("question", "Wurde ein roter Reifen gezeigt?").settings.css("font-size", "large"))
              .add(270,150, getText("Nein").settings.css("font-size", "18px"))
              .print()
              ,

              newSelector("select")
                .settings.add(getText("Nein"), getText("Ja"))
                .settings.keys("F", "J")
                .settings.log()
                .wait()
              ,



)
.setOption("hideProgressBar", "true")
;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Break

PennController("break",


              newCanvas("breakcanvas", 800, 400)
              .add(250,50, newText("pleasewait1", "Eine kurze Pause zur Erholung!").settings.css("font-size", "large"))
              .add(250,100, newText("pleasewait2", "Sobald du fortfahren kannst, erscheint unten der <i>weiter</i>-Knopf.").settings.css("font-size", "18px"))
              .print()


              ,

              newTimer("break", 10000)
              .start()
              .wait()

              ,

              getCanvas("breakcanvas")
              .remove()

              ,

              newCanvas("breakendcanvas", 800, 400)
              .add(215, 50, newText("continue", "Du kannst das Experiment jetzt fortsetzen.") .settings.css("font-size", "18px"))
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()

    )

   .setOption("hideProgressBar", "true")
;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

PennController("end",

    newText("<p>Vielen Dank f&uuml;r deine Teilnahme!</p>")
    .settings.css("font-size", "large")
    .print()

     ,

    newCanvas("empty6", 1, 10)
    .print()

    ,

    newText("Code",  "Wichtiger Hinweis:  <br /> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb deines Clickworker-Aufgabenformulars ein. <br /> Ohne die Eingabe dieses Codes kann eine Gutschrift deines Honorars nicht erfolgen!")
    .settings.css("font-size", "large")
    .print()

    ,

     newCanvas("empty7", 1, 5)
    .print()

    ,

    newText("Code2", "<b> Code: PWIBB1 </b>")
    .settings.css("font-size", "large")
    .print()

    ,


    newButton("void")
     .wait()

)

    .setOption("hideProgressBar", "true")
