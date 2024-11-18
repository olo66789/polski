const books = [
    {
        tytul: "Biblia",
        autor: "Mateusz, Jan",
        epoka: "Starożytność",
        gatunek: "Utwór synkretyczny",
        bohaterowie: "Adam, Ewa, Abraham, Izaak, Jakub, Józef, Mojżesz, Aaron, Dawid, Salomon, Noe, Hagar, Izmael, Ezaw, Goliat, Batszeba, Dalila, Samson, Jozue, Eliasz, Elizeusz, Hiob, Estera, Daniel, Jonasza"
    },
    {
        tytul: "Mitologia",
        autor: "Jan Parandowski",
        epoka: "Starożytność",
        gatunek: "Mit",
        bohaterowie: "Zeus, Atena, Hefajstos, Dionizos, Apollo, Eros, Hera, Artemida, Hermes, Hades, Demeter, Persefona, Posejdon, Afrodyta, Ares, Hestia, Amfitryta, Erynie, Hekate, Helios, Iris, Mojry, Nike, Pan, Selene, Psyche, Tanatos, Temida, Herakles"
    },
    {
        tytul: "Iliada",
        autor: "Homer",
        epoka: "Starożytność",
        gatunek: "Epos",
        bohaterowie: "Achilles, Agamemnon, Menelaos, Diomedes, Odyseusz, Nestor, Patroklos, Ajas Wielki, Ajas Mały, Hektor, Priam, Parys, Sarpedon, Polydamas, Deifob, Hekabe, Bryzeida, Helena, Atena, Hera, Posejdon, Hefajstos, Zeus, Apollo, Afrodyta, Ares"
    },
    {
        tytul: "Antygona",
        autor: "Sofokles",
        epoka: "Starożytność",
        gatunek: "Tragedia antyczna",
        bohaterowie: "Antygona, Ismena, Polinejkes, Eteokles, Kreon, Jokasta, Edyp, Hajmon, Eurydyka"
    },
    {
        tytul: "Lament Świętokrzyski",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Lament",
        bohaterowie: "Maryja, Jezus"
    },
    {
        tytul: "Legenda o Św. Aleksym",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Legenda hagiograficzna",
        bohaterowie: "Aleksy, Famijana, Eufamijan, Aglijas"
    },
    {
        tytul: "Rozmowa mistrza Polikarpa ze śmiercią",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Wierszowany dialog",
        bohaterowie: "Polikarp, Śmierć"
    },
    {
        tytul: "Kwiatki św. Franciszka z Asyżu",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Legenda hagiograficzna",
        bohaterowie: "Św. Franciszek z Asyżu, Brat Bernard z Kwintawalle, Brat Leon, Brat Sylwester, Brat Eliasz, Brat Maciej z Marignano, Brat Rufin, Brat Idzi, Brat Filip Długi, Św. Klara z Asyżu, Św. Agnieszka, Anioł, Chrystus, Sędzia z Bolonii"
    },
    {
        tytul: "Pieśń o Rolandzie",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Epos rycerski",
        bohaterowie: "Roland, Karol Wielki, Oliwier, Ganelon, Turpin, Marsyl"
    },
    {
        tytul: "Kronika Polska",
        autor: "Gall Anonim",
        epoka: "Średniowiecze",
        gatunek: "Średniowieczna kronika",
        bohaterowie: "Mieszko I, Bolesław Chrobry, Mieszko II, Kazimierz Odnowiciel, Bolesław Śmiały, Władysław Herman, Bolesław III Krzywousty"
    },
    {
        tytul: "Boska Komedia",
        autor: "Dante Alighieri",
        epoka: "Średniowiecze",
        gatunek: "Poemat epicki",
        bohaterowie: "Dante, Wergiliusz, Beatrycze, św. Bernard z Clairvaux, Francesca da Rimini, Brunetto Latini, Katon Młodszy, Publiusz Stacjusz, Foreze Donati, Trajan, Hiskia"
    },
    {
        tytul: "Odprawa posłów greckich",
        autor: "Jan Kochanowski",
        epoka: "Renesans",
        gatunek: "Dramat humanistyczny",
        bohaterowie: "Aleksander, Antenor, Priam, Kasandra, Ikateon, Helena, Ulisses, Menelaos"
    },
    {
        tytul: "Kazania sejmowe",
        autor: "Piotr Skarga",
        epoka: "Renesans",
        gatunek: "Kazanie",
        bohaterowie: "Mojżesz, Samson, Joab, Nehemiasz, Zorobabel, synowie Matatiasza, Judyta, Estera"
    },
    {
        tytul: "Pamiętniki",
        autor: "Jan Chryzostom Pasek",
        epoka: "Barok",
        gatunek: "Pamiętnik",
        bohaterowie: "Autor pamiętników"
    },
    {
        tytul: "Makbet",
        autor: "William Szekspir",
        epoka: "Barok",
        gatunek: "Dramat szekspirowski",
        bohaterowie: "Makbet, Lady Makbet, Dunkan, Banko, Makduf, Malkolm, Donalbein, Fleance, Siward, Młody Siward, Lady Makduf, Hekate"
    },
    {
        tytul: "Skąpiec",
        autor: "Molier",
        epoka: "Barok",
        gatunek: "Komedia obyczajowa",
        bohaterowie: "Harpagon, Kleant, Eliza, Marianna, Walery, Anzelm, Frozyna, Simon, Jakub, Strzałka, Ździebełko, Szczygiełek, Pani Claude"
    },
    {
        tytul: "Konrad Wallenrod",
        autor: "Adam Mickiewicz",
        epoka: "Romantyzm",
        gatunek: "Powieść poetycka",
        bohaterowie: "Konrad Wallenrod, Walter Alf, Wajdelota, Aldona, Halban, Kiejstut, Winrych von Kniprode, Almanzor, Książę Witold"
    },
    {
        tytul: "Dziady cz. III",
        autor: "Adam Mickiewicz",
        epoka: "Romantyzm",
        gatunek: "Dramat romantyczny",
        bohaterowie: "Konrad, Ksiądz Piotr, Ewa, Żegota, Tomasz, Jan Sobolewski, Cichowski, Jan Rollinson, Pani Rollisonowa, Kapral, Senator Nowosilcow, Bajkow, Pelikan, Guślarz"
    },
    {
        tytul: "Pan Tadeusz",
        autor: "Adam Mickiewicz",
        epoka: "Romantyzm",
        gatunek: "Epopeja narodowa",
        bohaterowie: "Jacek Soplica, Tadeusz Soplica, Sędzia, Hrabia, Telimena, Zosia, Gerwazy Rębajło, Protazy Brzechalski, Major Płut, Kapitan Ryków, Stolnik Horeszko, Wojski Hreczecha, Rejent Bolesta, Asesor, Jankiel, Maciek nad Maćkami"
    },
    {
        tytul: "Kordian",
        autor: "Juliusz Słowacki",
        epoka: "Romantyzm",
        gatunek: "Dramat romantyczny",
        bohaterowie: "Kordian, Grzegorz, Laura, Wioletta, Papież, Prezes, Ksiądz, Car Mikołaj I, Wielki Książę Konstanty, Diabeł"
    },
    {
        tytul: "Balladyna",
        autor: "Juliusz Słowacki",
        epoka: "Romantyzm",
        gatunek: "Dramat romantyczny",
        bohaterowie: "Balladyna, Alina, Kirkor, Pustelnik, Grabiec, Filon, Kostryn, Wdowa, Gralon, Goplana, Chochlik, Skierka"
    },
    {
        tytul: "Lalka",
        autor: "Bolesław Prus",
        epoka: "Pozytywizm",
        gatunek: "Powieść",
        bohaterowie: "Izabela Łęcka, Tomasz Łęcki, Prezesowa Zasławska, Baronowa Krzeszowska, Baron Krzeszowski, Kazimierz Starski, Kazimiera Wąsowska, Baron Dalski, Ewelina Janocka, Julian Ochocki, Książę, Molinari, Rossi, Florentyna, Maruszewicz, Hrabina Joanna Karolowa, Felicja (Fela) Janocka, Hrabia Liciński, Stanisław Wokulski, Helena Stawska, Ludwik Stawski, Helunia Stawska, Wirski, Piotr Wokulski, Jadwiga Misiewicz, Ignacy Rzecki, Lisiecki, Mraczewski, Doktor Michał Szuman, Henryk Szlangbaum, August Katz, Jan Mincel (młodszy), Jan Mincel (starszy), Franz Mincel, Małgorzata Mincel, Stary Szlangabum, Kasia Hopfer, Klejn, Suzin, Profesor Geist, Studenci (Maleski, Patkiewicz i trzeci student), Inkasent Oberman, Szprot, Węgrowicz, Maria (Marianna), Wysocki, Węgiełek"
    },
    {
        tytul: "Gloria Victis",
        autor: "Eliza Orzeszkowa",
        epoka: "Pozytywizm",
        gatunek: "Nowela",
        bohaterowie: "Marian Tarłowski (Maryś), Jagmin, Romuald Traugutt, Aniela Tarłowska"
    },
    {
        tytul: "Potop",
        autor: "Henryk Sienkiewicz",
        epoka: "Pozytywizm",
        gatunek: "Powieść historyczna",
        bohaterowie: "Andrzej Kmicic, Aleksandra Billewiczówna, Anusia Borzobohata-Krasieńska, Bogusław Radziwiłł, Jan II Kazimierz Waza, Jan Onufry Zagłoba, Jan Skrzetuski, Jan Sobiepan Zamoyski, Książę Janusz Radziwiłł, Jerzy Michał Wołodyjowski, Bliźniacy Kosma z Damianem, Paweł Jan Sapieha, Roch Kowalski, Stefan Czarniecki, Soroka, Tomasz Billewicz, Wincenty Aleksander Gosiewski, Ojciec Augustyn Kordecki"
    },
    {
        tytul: "Zbrodnia i Kara",
        autor: "Fiodor Dostojewski",
        epoka: "Pozytywizm",
        gatunek: "Powieść",
        bohaterowie: "Rodion Raskolnikow, Sonia Marmieładowa, Razumichin, Dunia, Pulcheria Raskolnikowa, Piotr Łużyn, Arkadiusz Swidrygajłow, Marfa Pietrowna, Marmieładow, Katarzyna Iwanowna, Andrzej Siemionowicz Lebiezatnikow, Alona Iwanowna, Lizawieta Iwanowna, Porfiry Pietrowicz, Mikołaj Dementiew, Zosimow, Zamiatow"
    },
    {
        tytul: "Wesele",
        autor: "Stanisław Wyspiański",
        epoka: "Młoda Polska",
        gatunek: "Dramat symboliczny",
        bohaterowie: "Pan Młody, Poeta, Dziennikarz, Nos, Radczyni, Ksiądz, Maryna, Zosia, Haneczka, Panna Młoda, Czepiec, Gospodarz, Gospodyni, Ojciec, Żyd Mosiek, Rachela, Jasiek, Klimina, Dziad, Kasper, Kasia, Marysia, Wojtek, Isia, Staszek, Kuba, Czepcowa, Muzykant, Chochoł, Widmo, Stańczyk, Rycerz, Hetman, Upiór, Wernyhora"
    },
    {
        tytul: "Chłopi",
        autor: "Władysław Reymont",
        epoka: "Młoda Polska",
        gatunek: "Powieść",
        bohaterowie: "Maciej Boryna, Antek Boryna, Jagna Paczesiówna, Hanka Borynowa, Jagustynka, Agata, Roch, Mateusz Gołąb, Nastka, Jacek, Kuba Socha, Witek, Pietrek, Jambroży, Dominikowa, Szymek, Kowal, Józka, Tereska, Bylica, Weronika, Jasiek"
    },
	{
        tytul: "Przedwiośnie",
        autor: "Stefan Żeromski",
        epoka: "XX-lecie międzywojenne",
        gatunek: "Powieść nowoczesna",
        bohaterowie: "Cezary Grzegorz Baryka, Jadwiga Baryka z Dąbrowskich, Seweryn Baryka, Kalikst Grzegorz Baryka, Szymon Gajowiec, Hipolit Wielosławski, Karolina Szarłatowiczówna, Wanda Okszyńska, Laura Kościeniecka, Władysław Barwicki, Storzan, Ksiądz Anastazy, Maciejunio, Wojciunio, Jędrek, Państwo Turzyccy, Gruboszewski, Księżna Szczerbatow-Mamajew,Czarny , Antoni Lulek, Buławnik"
    },
	{
        tytul: "Ferdydurke",
        autor: "Witold Gombrowicz",
        epoka: "XX-lecie międzywojenne",
        gatunek: "Powieść awangardowa",
        bohaterowie: "Józio Kowalski, Miętus, Syfon, Myzdral, Hopek, Gałkiewicz, Kopyrda, Pimko, Dyrektor Piórkowski, Bladaczka, Nauczyciel łaciny, Wiktor Młodziak, Joanna Młodziakowa, Zuta Młodziakówna, Ciotka Hurlecka, Wuj Konstanty, Zygmunt, Zosia, Franciszek, Waluś, Marcyśka, Filidor, Pani Filidor, Anty-Filidor, Flora Gente, Filibert"
    },
    {
        tytul: "Proszę państwa do gazu",
        autor: "Tadeusz Borowski",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Opowiadanie",
        bohaterowie: "Tadek, Henri, Cosway, Andrej"
    },
    {
        tytul: "Ludzie, którzy szli",
        autor: "Tadeusz Borowski",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Opowiadanie",
        bohaterowie: "Narrator, Mirka, Ruda, Żyd"
    },
	{
        tytul: "Inny świat",
        autor: "Gustaw Herling-Grudziński",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Proza dokumentalna",
        bohaterowie: "Gustaw Herling-Grudziński, Dimka, Gorcew, Jegorow, Jewgienija Fiodorowna, Kowal, Marusia, Michaił Aleksiejewicz Kostylew, Natalia Lwowna, Pamfiłow, Ponomarenko, Profesor Borys Lazarowicz, Rusto Karinen, Sadowski, Zabójca Stalina, Generalska doczka, Koźma, Pułkownik Szkłowski"
    },
    {
        tytul: "Zdążyć przed Panem Bogiem",
        autor: "Hanna Krall",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Reportaż",
        bohaterowie: "Marek Edelman, Mordechaj Anielewicz, Adam Czerniaków, Arie Wilner, Michał Klepfisz, Icchak Cukierman, Teodozja Goliborska, Abraham Blum, Luba Blum, Zalman Frydrych, Pola Lifszyc, Hennoch Rus, Frania, Teosia Tenenbaumanówna, Henryk Grabowski, Henryk Woliński, Profesor Jan Moll, Elżbieta Chętkowska, Pani Bubnerowa, Pan Rudny, Inżynier Wilczkowski, Pan Rzewuski, Jürgen Stroop"
    },
	{
        tytul: "Dżuma",
        autor: "Albert Camus",
        epoka: "Współczesność",
        gatunek: "Powieść filozoficzna",
        bohaterowie: "Doktor Bernard Rieux, Jean Tarrou, Raymond Rambert, Joseph Grand, Cottard, Ojciec Paneloux, Sędzia Othon, Filip, Michel, Doktor Castel, Doktor Richard, Żona doktora Rieux, Matka doktora Rieux, Gonzales, Marcel, Louis, Raoul"
    },
	{
        tytul: "Rok 1984",
        autor: "George Orwell",
        epoka: "Współczesność",
        gatunek: "Powieść dystopijna",
        bohaterowie: "Winston Smith, Julia, O'Brien, Syme, Parsons, Wielki Brat, Goldstein, Charrington, Partia, Prole"
    },
	{
        tytul: "Tango",
        autor: "Sławomir Mrożek",
        epoka: "Współczesność",
        gatunek: "Dramat groteskowy",
        bohaterowie: "Artur, Stomil, Eleonora, Edek, Eugenia, Ala (Alicja), Eugeniusz"
    },
	{
        tytul: "Górą Edek",
        autor: "Marek Nowakowski",
        epoka: "Współczesność",
        gatunek: "Opowiadanie",
        bohaterowie: "Narrator, Kierowca malucha, Kierowca forda (Edek)"
    },
	{
        tytul: "Profesor Andrews w Warszawie",
        autor: "Olga Tokarczuk",
        epoka: "Współczesność",
        gatunek: "Opowiadanie",
        bohaterowie: "Profesor Andrews, Małgorzata (Gosha)"
    }
];