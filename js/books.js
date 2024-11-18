const books = [
    {
        tytul: "Biblia",
        autor: "Mateusz, Jan",
        epoka: "Starożytność",
        gatunek: "Utwór synkretyczny",
        bohaterowie: "Adam, Ewa, Hiob"
    },
    {
        tytul: "Mitologia",
        autor: "Jan Parandowski",
        epoka: "Starożytność",
        gatunek: "Mit",
        bohaterowie: "Ares, Hera, Atena, Apollo, Hermes"
    },
    {
        tytul: "Iliada",
        autor: "Homer",
        epoka: "Starożytność",
        gatunek: "Epos",
        bohaterowie: "Achilles, Parys, Agamemnon, Zeus"
    },
    {
        tytul: "Antygona",
        autor: "Sofokles",
        epoka: "Starożytność",
        gatunek: "Tragedia antyczna",
        bohaterowie: "Antygona, Kreon, Hajmon, Ismena, Tyrezjasz"
    },
    {
        tytul: "Lament Świętokrzyski",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Lament",
        bohaterowie: "Matka Boska"
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
        bohaterowie: "Franciszek, współbracia, Święci"
    },
    {
        tytul: "Pieśń o Rolandzie",
        autor: "-",
        epoka: "Średniowiecze",
        gatunek: "Epos rycerski",
        bohaterowie: "Roland, Karol Wielki, Oliwier, Ganelon, Marsyl"
    },
    {
        tytul: "Kronika Polska",
        autor: "Gall Anonim",
        epoka: "Średniowiecze",
        gatunek: "Średniowieczna kronika",
        bohaterowie: "Bolesław Chrobry, Bolesław Śmiały, Bolesław Krzywousty"
    },
    {
        tytul: "Boska Komedia",
        autor: "Dante Alighieri",
        epoka: "Średniowiecze",
        gatunek: "Poemat epicki",
        bohaterowie: "Wergiliusz, Beatrycze"
    },
    {
        tytul: "Odprawa posłów greckich",
        autor: "Jan Kochanowski",
        epoka: "Renesans",
        gatunek: "Dramat humanistyczny",
        bohaterowie: "Antenor, Aleksander"
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
        bohaterowie: "Makbet, Lady Makbet, Makduf, Lady Makduf, Dunkan, Malkolm, Donalbein, Banko, Fleance"
    },
    {
        tytul: "Skąpiec",
        autor: "Molier",
        epoka: "Barok",
        gatunek: "Komedia obyczajowa",
        bohaterowie: "Harpagon, Kleant, Eliza, Anzelm, Walery, Marianna, Strzałka"
    },
    {
        tytul: "Konrad Wallenrod",
        autor: "Adam Mickiewicz",
        epoka: "Romantyzm",
        gatunek: "Powieść poetycka",
        bohaterowie: "Konrad Wallenrod, Aldona, Halban, Winrich von Kniprode, Książę Witold"
    },
    {
        tytul: "Dziady cz. III",
        autor: "Adam Mickiewicz",
        epoka: "Romantyzm",
        gatunek: "Dramat romantyczny",
        bohaterowie: "Konrad, Ksiądz Piotr, Żegota, Ewa, Guślarz, Pani Rollison, Duch Doktora, Bajkow, Senator, Patrioci"
    },
    {
        tytul: "Pan Tadeusz",
        autor: "Adam Mickiewicz",
        epoka: "Romantyzm",
        gatunek: "Epopeja narodowa",
        bohaterowie: "Tadeusz, Zosia, Gerwazy, Jacek"
    },
    {
        tytul: "Kordian",
        autor: "Juliusz Słowacki",
        epoka: "Romantyzm",
        gatunek: "Dramat romantyczny",
        bohaterowie: "Kordian, Laura, Wioletta, Prezes, Papież"
    },
    {
        tytul: "Lalka",
        autor: "Bolesław Prus",
        epoka: "Pozytywizm",
        gatunek: "Powieść",
        bohaterowie: "Stanisław Wokulski, Ignacy Rzecki, Izabela Łęcka, Helena Stawska, Minclowie, Henryk Szlangbaum"
    },
    {
        tytul: "Gloria Victis",
        autor: "Eliza Orzeszkowa",
        epoka: "Pozytywizm",
        gatunek: "Nowela",
        bohaterowie: "Maryś Tarłowski, Aniela Tarłowska, Jagmin, Romuald Traugutt"
    },
    {
        tytul: "Potop",
        autor: "Henryk Sienkiewicz",
        epoka: "Pozytywizm",
        gatunek: "Powieść historyczna",
        bohaterowie: "Andrzej Kmicic, Oleńka Billewiczówna, Soroka, Michał Wołodyjowski, Bogusław Radziwiłł, Andrzej Kuklinowski, Jan Zagłoba"
    },
    {
        tytul: "Zbrodnia i Kara",
        autor: "Fiodor Dostojewski",
        epoka: "Pozytywizm",
        gatunek: "Powieść",
        bohaterowie: "Rodion Raskolnikow, Sonia Marmieładowa, Siemion Marmieładow, Porfiry Pietrowicz, Arkadiusz Swidrygajłow, Piotr Łużyn"
    },
    {
        tytul: "Wesele",
        autor: "Stanisław Wyspiański",
        epoka: "Młoda Polska",
        gatunek: "Dramat symboliczny",
        bohaterowie: "Pan Młody, Pani Młoda, Gospodarz, Gospodyni, Czepiec, Poeta, Jasiek, Dziennikarz, Radczyni, Dziad, Marysia"
    },
    {
        tytul: "Chłopi",
        autor: "Władysław Reymont",
        epoka: "Młoda Polska",
        gatunek: "Powieść",
        bohaterowie: "Jagna, Maciej, Antoni"
    },
	{
        tytul: "Przedwiośnie",
        autor: "Stefan Żeromski",
        epoka: "XX-lecie międzywojenne",
        gatunek: "Powieść nowoczesna",
        bohaterowie: "Cezary Baryka, Seweryn Baryka, Jadwiga Barykowa, Szymon Gajowiec, Hipolit Wielosławski"
    },
    {
        tytul: "Proszę państwa do gazu",
        autor: "Tadeusz Borowski",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Opowiadanie",
        bohaterowie: "Tadek, Henri, Andrej, Cosway"
    },
    {
        tytul: "Zdążyć przed Panem Bogiem",
        autor: "Hanna Krall",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Reportaż",
        bohaterowie: "Marek Edelman, Jan Moll, Mordechaj Anielewicz, Pola Lifszyc"
    },
	{
        tytul: "Inny świat",
        autor: "Gustaw Herling-Grudziński",
        epoka: "Literatura wojny i okupacji",
        gatunek: "Proza dokumentalna",
        bohaterowie: "Narrator, więźniowie łagrów"
    },
	{
        tytul: "Rok 1984",
        autor: "George Orwell",
        epoka: "Współczesność",
        gatunek: "Powieść dystopijna",
        bohaterowie: "Winston Smith, Julia, O’Brien, Wielki brat"
    },
	{
        tytul: "Tango",
        autor: "Sławomir Mrożek",
        epoka: "Współczesność",
        gatunek: "Dramat groteskowy",
        bohaterowie: "Artur, Eleonora, Stomil, Eugeniusz, Eugenia, Ala, Edek"
    },
	{
        tytul: "Dżuma",
        autor: "Albert Camus",
        epoka: "Współczesność",
        gatunek: "Powieść filozoficzna",
        bohaterowie: "Bernard Rieux, Jean Tarrou, Raymond Rambert o.Paneloux"
    },
	{
        tytul: "Profesor Andrews w Warszawie",
        autor: "Olga Tokarczuk",
        epoka: "Współczesność",
        gatunek: "Opowiadanie",
        bohaterowie: "Andrews, Małgorzata (Gosha)"
    }
];