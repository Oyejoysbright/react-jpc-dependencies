import React, { useState } from 'react'
import { JArrayObject } from '../services/Jpc';

function AddressInput() {
    return (
        <div>
            <select></select>
        </div>
    )
}

export default AddressInput;


export function CountryInput({onChange, name, value}){

    return <select name={name} value={value} onChange={onChange}>
                <option value="">Select</option>
                {
                    data.map((obj, i) => (<option value={obj.country} key={i}>{obj.country}</option>))
                }
            </select>
}

export function RegionInput({country = "",onChange, name, value}) {
    let dataList = [];
    if (country !== "") {
        const temp = JArrayObject.find.getObject(data, country, "country")["state"];        
        if(temp === undefined) dataList = [];
        else dataList = temp;   
    }

    return <select name={name} value={value} onChange={onChange}>
                <option value="">Select</option>
                {
                    dataList.map((item, i) => (<option value={item} key={i}>{item}</option>))
                }
            </select>
}

export function CityInput({country = "", region = "", onChange, name, value}) {

    let dataList = [];
    if (country !== "" && region !== "") {
        const temp = JArrayObject.find.getObject(data, country, "country")["city"][region.toLowerCase()];    
        if(temp === undefined) dataList = [];
        else dataList = temp;   
    }

    return <select name={name} value={value} onChange={onChange}>
                <option value="">Select</option>
                {
                    dataList.map((item, i) => (<option value={item} key={i}>{item}</option>))
                }
            </select>
}

export function LocalGovtInput({country = "", region = "",onChange, name, value}) {

    let dataList = [];
    if (country !== "" && region !== "") {
        const temp = JArrayObject.find.getObject(data, country, "country")["lga"][region.toLowerCase()];
        if(temp === undefined) dataList = [];
        else dataList = temp;
    }

    return <select name={name} value={value} onChange={onChange}>
                <option value="">Select</option>
                {
                    dataList.map((item, i) => (<option value={item} key={i}>{item}</option>))
                }
            </select>
}

const data = [
   
    {
        "id": 1,
        "country": "Nigeria",
        "state": ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],
        "city": {
            'abia': [
                'Arochukwu', 'Aba', 'Abiriba', 'Amaeke','Ohafia', 'Aba South', 'Umuahia','Isuikwuato','Osisioma Ngwa'
               ,'Ugwunagbo','Ikwuano', 'Isiala-Nwga South','Aba South', 'Ndi Elu Nkporo', 'Umuahia North','Umu-Nneochi'
              , 'Uturu', 'Ukwa East', 'Ukwa West','Isiala-Nwga North', 'Umudike', 'Alayi', 'Owerrinta', 'Umuahia South',
               'Azumini','Obi Ngwa','Umukabia', 'Ovukwu', 'Amuvi','Akwete', 'Nsirimo', 'Ozu Abam', 'Ihite','Obinkita'
              , 'Amaozara', 'Ovungwu','Ubakala', 'Ujari', 'Elemaga', 'Eluoma','Udi', 'Umuchima', 'Umuogele', 'Nkpa'   
           ],
           'adamawa': [
            'Yola', 'Mubi', 'Numan', 'Jimeta', 'Michika','Guyuk', 'Ganye', 'Madagali', 'Gombi', 'Fufore', 'Jada', 
            'Girei', 'Yola North', 'Hong', 'Song', 'Lamurde', 'Mubi North','Shelleng', 'Demsa','Malyo Belwa', 'Toungo'
            ,'Alkalawa','Balanga', 'Labbare','Lamorde', 'Mararaba Mubi', 'Hawul'
            
           ],
           'awka ibom': [
            
            'Uyo', 'ikot Epkene', 'Oron','Eket','Ibeno','Abak', 'Etinan', 'Itu', 'Ibiono Ibom', 'Uruan', 'Ikot Abasi'
             ,'Mkpat Enin', 'Oruk Anam', 'Ibesikpo Asutan','Ikono', 'Esit Eket', 'Nsit Ibom', 'Ukanafun','Obot Akara'
            ,'Okobo', 'Onna', 'Etim Okpo', 'Udung Nko', 'Urue Offong/Oruko', 'Nsit Atai', 'EssienUdim', 'Ini',
             'Eastern Obolo','Ikot Abasi', 'Ika','Afaha','Ikot Udo Abia', '"id"u', 'Mbo', 'Epkarakwa', 'Adadia', 
             'Ikot Ukpong', 'Ikot Okoro', 'Arochukwu', 'Ekpene Ukim', 'Ikot Ibritan', 'Obio Akpa', 'Ikot Akpa Nkuk'
           ,'Ntak Ibesit', 'Usuk Obio Ediene','Ikot Afanga', 'Ediene', 'Obio Ndombo','Ikot Obio'
            
            ],
            'anambra':[
            'Akwa', 'Anambra East', 'Onitsha', 'Akwa Etiti', 'Obosi', 'Ihiala', 'Amawbia', 'Orumba North', 'Nnewi',
            'Ayamelum', 'Agulu', 'Oba', '"id"emili North', 'Aguleri', 'Anaocha', 'Enugwu Ukwu', 'Akwa South',
            'Abagana', 'Nkpor', 'Nsugbe', 'Nibo', 'Okija', 'Onitsha North', 'Ekwusigo', 'Ekwulobia', '"id"emili South',
            'Oyi', 'Adazi Nnukwu', 'Ozubulu', 'Umuleri', 'Aguata', 'Dunukofia', 'Alor', 'Anambra South', 'Njikoka',
            'Umudioka', 'Awkwuzu', 'Nanka', 'Ogbaru', 'Umuchu', 'Umunya', 'Atani', 'Akwa North', 'Og"id"i', 'Nzam',
            'Umunze', 'Igbo Ukwu', 'Nawfia', 'Otuocha', 'Uga', 'Umuawulu'
             ],
            'bauchi' :[
            'Bauchi', 'Misau', 'Jamaare', 'Azare', 'Katagum', 'Alkaleri', 'Tafawa Balewa', 'Dass', 'Darazo', 'Toro',
            'Kirfi', 'Ganjuwa', 'Giade', 'Damban', 'Itas/Gadau', 'Gamawa', 'Warji', 'Ningi', 'Zaki', 'Shira',
            'Bogoro', 'Disina', 'Zadawa', 'Faggo', 'Taura', 'Doguwa', 'Jor North'
             ],
            'bayelsa':[
            'Ogbia', 'Nembe', 'Sagbama', 'Brass', 'Kolokuma/Opokuma', 'Southern Ijaw', 'Ekeremor', 'Oloibiri', 'Ologi',
            'Otuoke', 'Odioma', 'Kaiama', 'Brass Island', 'Bomadi'
             ],
            'benue' :[
            'Makurdi', 'Otukpo', 'Vande Ikya', 'Kastina Ala', 'Buruku', 'Gboko', 'Agatu', 'Oju', 'Igumale', 'Gwer East',
            'Gwer West', 'Apa', 'Guma', 'Kwande', 'Konshisha', 'Ohimini', 'Ukum', 'Logo', 'Ushongo', 'Ado', 'Okpokwu',
            'Ogbadibo', 'Tarka', 'Obi', 'Otukpa', 'Gbagbongom', 'Mbayegh', 'Mbaanku','Agbadi', 'Itogo-Ekingo',
            'Mangel'
             ],
            'borno': [
            'Ma"id"uguri', 'Biu', 'Bama', 'Dikwa', 'Gwoza', 'Kukawa', 'Konduga', 'Damboa', 'Monguno', 'Ngala', 'Magumeri',
            'Gubio', 'Mafa', 'Askira/Uba', 'Marte', 'Chibok', 'Shani','Bayo', 'Doro Gowon', 'Kala/Balge', 'Nganzai',
            'Guzamala', 'Mobbar','Kaga', 'Abadam', 'Hawul', 'Kwaya Kusar', 'Gambaru', 'Damasak', 'Rann', 'Dalori',
            'Kauwa', 'Mandaragirau', 'Wamdeo/Giwi', 'Jere', 'Tarmua', 'Izghe', 'Kogu, Biu', 'Lassa', 'Amch"id"e'
             ],
            'cross river' :[
            'Calabar', 'Ogoja', 'Ikom', 'Obudu', 'Akampkpa', 'Obubra', 'Odukpani', 'Ugep', 'Boki', 'Obanliku', 'Akpabuyo',
            'Biase', 'Calabar south', 'Etung', 'Yala', 'Bekwarra', 'Okuku', 'Akpap', 'Ediba', 'Usumutong', 'Adamawa', 
            'Itig"id"i', 'Creek Town', 'Ebom', 'Ababene', 'Uyanga', 'Udomi', 'Iko Akperem', 'Mkpani',  'Afafanyi', 
            'Ehom', 'Betem ', 'Iko Esai', 'Etara', 'Edondon', 'Agoi Ekpo', 'Inyima', 'Ibenda', 'Enugwema', 'Ensuokwe',
            'Yenon', 'Imabana', 'Akanefore', 'Epenti', 'Erei', 'Okokori', 'Ikot Okpo Ene','Eno-Evong'
             ],
            'delta' : [
            'Warri', 'Asaba', 'Sapele', 'Ughelli', 'Burutu', 'Abraka', 'Effurun', 'agbor','udu','bomadi','patani','abo',
            'oghara','isoko south','isoko north','igbuzor','obiariku','emevor','orerokpe', 'ogwashi-ukwu','koko','warri north','warri south',
            'uvwie', 'oshimili south','agarho','osubi','ndokwa east','ethipoe east','ethiope west','oshimili north','eku','ogbe ijoh','ozoro',
            'agbara otor','illah','ovwian','ika south','ika north east','ofagbe','Igbuku', 'Emede', 'Egini','Kwale',
            'Okwagbe'
              ],
            'ebonyi' : [
            'Abakaliki', 'Afikpo North', 'Afikpo', 'Ikwo', 'Ohaozara', 'Ivo','Ezza North', 'Ishiagu', 'Akikpo South',
            'Onicha', 'Unwana', 'Ezza South', 'Ishielu', 'Ohaukwu', 'Onueke', 'Effium I', 'Ishieke', 'Nkalagu', 'Nkanu East',
            'Itig"id"i'
              ],
            'edo' : [
            'Benin "city"', 'Auchi', 'Ekpoma', 'Oredo', 'Uromi', 'Egor', 'Ikpoba-Ohka', 'Iguegben', 'Esan West', 'Ovia North East',
            'Esan North-East', 'Orhionmwon', 'Akoko-Edo', 'Etsako-Central', 'Ovia South-West', 'Agenebode', 'Esan central',
            'Esan East', 'Esan West', 'Owan East', 'Ososo', 'Ibilo', 'Esan South-East', 'Uhunmwonde', 'Owan West', 'Jattu',
            'Ewu Esan', 'Igbaneke', 'Ughoton', 'Okpekpe', 'Ogwa Town', 'Uzebba', 'Uokha', 'Ihievbe', 'Ohordua', 'Ugbokhare',
            'Iguododo', 'Obadan', 'Lampese', 'Imekuri', 'Iboa', 'Emokweme','Okpe', 'Iyamho', 'Eso'
              ],
            'ekiti' :  [
            'Ado Ekiti', 'Ikere', 'Ikole', 'Ijero', 'Efon', 'Oye', 'Emure', '"id"o-Osi', 'Ise', 'Efon Alaye', 'Ekiti South-West',
            'Irepodun/Ifelodun', 'Ekiti West', 'Ise/Orun', 'Iyin', 'Omuo', 'Ilawe-Ekiti', 'Ekiti East', 'Moba', 'Ilejemeje',
            'Oke-Mesi', 'Ikoro', 'Ire Ekiti', 'Imesi'
              ],
            'enugu' : [
            'Enugu', 'Nsukka', 'Udi', 'Oji River', 'Awgwu','Ngwo', 'Enugu North', 'Ezeagu', 'Uzo-Iwani','Enugu East', 'Ohum',
            'Enugu South','Igboland', 'Nkanu East', 'Aninri', 'Udenu', 'Nkanu West', 'Eha Amufu', 'Isi-Uzo','Igbo-Etiti','Abor',
            'Achi','Aku', 'Igbo-Eze-North','Enugu-Ezike','Igbo-Eze-South','Ugbo', 'Edem', 'Ugwuoba','Umulokpa','Mmaku','Enugu Inyi',
            'Nru Nsukka', 'Okpogho', 'Abi','Nara Unateze', 'Obimo' , 'Nomah Unateze', 'Neke, Isi-Uzo', 'Umudim', 'Ikolo','Nkalagu',
            'Umuana-ndiuno', 'Akpawfu/Isienu/mangunze'
              ],
            'gombe' :[
            'Gombe','Billiri','Akko','Dukku','Funakaye','Kaltungo','Nafada','Kwami','Bajoga','Kumo','Yamaltu/Deba','Shomgom',
            'Balanga','Deba/Habe','Shinga','kirfi','Guyuk'
              ],
             'imo' : [
            'Owerri','Orlu','Oguta','Okigwe','Nkwerre','Owerri North','Ohaji/Egbema','Aboh-Mbaise','Ezinihitte','Ehime-Mbano',
            'Ahiazu-Mbaise','Orodo','Isu','Ihiagwa','Iho','Emekuku','Egbu','Amaimo','Irete','Orji','Ihite','Ohoba','Ejemekwuru',
            'Ahiara','Orogwe','Ubomiri','Naze','Ozara','Ngugo','Akabo','"id"eato North','Ogbaku','Umunuoha','Emii','Obinze','Nnarambia',
            'Uzuaba','Obilokwu Mbieri','Amatta','Akalovo','Amakioha','Ikembara','Owerri West','Ochicha','Anara','Umuagwo','Ogbe',
            'Eziama Obiato','Umuaghadi','Mbatoli','Ihitte-Uboma'
              ],
           'jigawa' : [
            'Dutse', 'Gumel', 'Hadejie', 'Birnin Kudi', 'Kazaure', 'Ringim', 'Kafin Hausa', 'Gwaram', 'Gagarawa', 'Babura',
            'Kiywaw','Birinwa','Auyo','Maigatari','Kaugama','Kiri Kasama','Garki','Gwiwa','Miga','Malam Maduri', 'Guri','Sule Tankakar',
            'Roni', 'Jahun', 'Yankwashi','Buji','Katanga','Dambatta','Dutsi'
              ],
            'kaduna' :[
            'Kaduna','Zaria','Kaduna North','Kaduna South','Chikun','Igabi','Kachia','Kafanchan','Giwa','Kaura','Sabon Gari',
            'Ikara','Birnin Gwari', 'Zangon Kataf','Jaba', 'Kagoro','Kagarko', `Kema'a`, 'Lere','Sabo','Kajuru','Sanga',
            'Nok','Jaji','Jere','Badarawa','Wusasa','Rahama','Sabuwa','Gwanki','Gabasawa','Loko' 
              ],
            'kano' :[
            'Kano','Nassarawa','Dala','Gwale','Ungogo','Kumbotso','Gaya','Sumaila','Dawakin Tofa','Ajingi','Kura','Gezawa','Minjibir','Tofa','Dawakin Kudu',
            'Takai','Madobi','Kabo','Dambatta','Kunchi','Bunkure','Garko','Rogo','Shanomo','Albasu','Rimin Gado','Warawa','Tudun Wada','Kibiya','Bagwai','Garum Mallam',
            'Karaye','Gwarzo','Rano','Wudil','Tsanyawa','Makoda','Bichi','Kiru','Bebeji','Gabasawa','Doguwa'
              ],
            'kastina':[
            'Katsina','Daura','Funtua','Jibia','Bakori','Dutsin-Ma','Batagarawa','Zango','Kankia','Kaita','Kankara','Mashi',
            'Malumfashi', 'Batsari','Baure','Dutsi','Cheranchi','Danja','Rimi','Kafur','Kurfi','Mani','Musawa','Faskari','Ingawa',
            'Dandume','Dan Musa','Kusada','Sandamu','Bindawa','Maiadua','Sabuwa','Matazu','Girka'
              ],
            'kebbi' :[
            'Birnin Kebbi','Argungu','Gwandu','Jega','Zuru','Yauri','Bunza','Baguda','Shanga','Sakaba','Maiyama','Aleiro',
            'Kalgo','Suru','Arewa Dandi','Koko/Besse','Augi','Wasagu/Danku','Ngaski','Fakai','Yelwa','Illo','Bin Yauri','Aliero',
            'Gummi','Gudu','Bussa','Magama','Tambuwal'
              ],
            'kogi' :[
            'Lokoja','Okene','"id"ah','Kabba','Ankpa','Ajaokuta','Kabba/Bunu','Yagba West', 'Okehi','Mopa-Muro','Dekina','Bassa',
            'Anyigba','Egbe','Ijumu','Adavi','Ogori/Magongo','Yagba East','Ofu','Ibaji','Omala','Obajana','Ukwo-Koton Karfe',
            'Igalamela-Odolu', 'Olamaboro','Og"id"i','Kogi','Ogaminana','Itakpe','Mopa','Aiyetoro Gbede','Ejule','Okenyi',
            'Ado','Ijagbe','Takete-Isao','Amuro'
               ],
            'kwara':[
            'Ilorin','Offa','Pategi','Kaiama','Omu-Aran','Jebba','Ilorin East','Edu','Ajasse Ipo','Oyun','Esie','Baruten',
            'Asa','Isin','Ekiti','Oke Ero','Ed"id"i','Moro','Oke Onigbin','Aran-Orin','Isanlu Isin','Omupo','Ijara Isin','Lafiagi',
            'Ilala','Erin Ile','Amoyo','Buari','Okanle','Igbonla'
               ],
            'lagos':[
            'Lagos-Island','Ikorodu','Lekki','Kosofe','Badagary','Epe','Mushin','Ikeja','Apapa','Somolu','Alimosho','Surulere',
            'Ajeromi-Ifelodun','Amuwo Odofin','Kosofe','Ojo','Yaba','Ebute Metta','Imota','Makoko','Ojuelegba','Ojo','Irewe',
            'Akesan','Iju','Ilaje','Mowo, Badagary','Seme Border','Ijebu North East','"id"oani Confederacy','Inisa',
            'Ijaye Ojokoro', 'Ayobo'
               ],
            'nassarawa': [
            'Lafia','Keffi','New Karu','Nasarawa','Akwanga','Wamba','Doma','Mararaba','Nasarawa Egon','Keana','Toto','New Nyanya',
            'Obi','Loko','Kokouna', `Masaka, Nasarawa`, 'Auta Balefi','Awe','Laminga','Alizaga','Kuchikau',
               ],
             'niger' :[
            'Minna','B"id"a','Kontagora','Suleja','Agaie','Mokwa','Shiroro','Lapai','Wushishi','Chanchaga','Mashegu','Agwara',
            'Bosso','Tafa','Magama','Lavun','Gbako','Katcha','Rafi','Edati','Paikoro','Zungeru','Rijau','Mariga','Baro','Munya',
            'Kagara','Tegina','New Bussa','Jebba','Madalla','Kutigi'
               ],
            'ogun' :[
            'Abeokuta','Sagamu','Ijebu Ode','Ilaro', 'Ifo','Ikenne','Owode','Ijebu Igbo','Odeda','Abeokuta North','Ado Odo/Ota',
            'Ipokia','Ago-Iwoye','Iperu','Odogbolu','Ewekero','Abeokuta South','Egbado South','Ijebu North','Egbado North','Ogun Waters"id"e',
            'Imeko Afon','Ogere','Ijebu East','Remo North','Ijebu North East','Ilishan-Remo','Ijoko','"id"iroko','Ishara','Igbesa',
            'Ota','Oru','Mowe/Ibafo','Isonyin','Atan','Iju','Iwoye','Ijebu Itele','Wasinmi','Ita Egbe','Ifonyintedo','Ikangba'
              ],
            'ondo':[
            'Akure','Owo','Ondo','Okitipupa','"id"anre','Ikare','Ilaje','Irele','Odigbo','Ifedore','Akure South','Ondo East',
            'Ondo West','Oka Akoko','Akoko North East','Akoko South-West','Ese Odo','Akure North','Ose','Akoko North-West',
            'Akoko South-East','Akoko','Erusu','Ifon','Ipele','Ijare','Akungba','Ilara-Mokin','"id"oani','Ode-Irele','Oyin',
            'Ipogun','Ibule-Soro','Ijebu','Ugbo Kingdom','Supare Akoko','Igbonla','Eti-Oni','Ise'
              ],
            'osun' :[
            'Osogbo','Ilesa','Ife','Iwo','Ejigbo','Ede','Olorunda','Ila Orangun','Ikirun','Obokun','Oke Ila Orangun',
            'Ikire','Ilobu','Esa Oke','Ifelodun','Iragbiji','Ilesha West','Ilesha East','Gbongan','Ife North','Egbedore',
            'Okuku','Boripe','Atakunmosa West'
              ],
            'oyo' :[
            'Ibadan','Iseyin','Ogbomosho','Oyo','Egbeda','Akinyele','Shaki','Ibadan North','"id"o','Kajola','Lagelu','Igboho',
            'Kishi','Igbo-Ora','Eruwa','Surulere','Oyo West','Ado Awaaiye','Lalupon','"id"o','Sepeteri','Afijio','Igbeti','Atisbo','Ibadan South West',
            'Ibarapa Central','Ibadan South East','Ibarapa North','Ibada North East','Iwajowa','Saki West','Saki East','Olorunsogo','Orelope','Ogbomosho South',
            'Ori Ile','Ibarapa East','Oyo East','Awe','Atiba','Iroko','Ona Ara','Ogbomosho North','Irepo','Ogo Oulwa','Itesiwaju','Ajegunle','Asipa'
              ],
            'plateau'  :[
            'Jos', 'Jos North', 'Jos South','Barkin Ladi','Wase','Bukuru','Shendam','Pankshin','Jos East','Bokkos','Langtang','Bassa','Riyom','Mangu','Langtang North',
            'Mikang','Kuru','Miango','Kurgwi', `Qua'an Pan`
              ],
            'rivers' :[
            'Port Harcout','Okrika','Obio/Akpor','Eleme','Bonny','Bane','Buguma','Abonnema','Omoku','Opobo','Degema','Elele','Rumuokoro','Ataba','Odiab"id"i',
            'Abalama','Igrita','Ahoada','Oyigbo','Abua/Odual','Etche','Ogu Bolo','Opobo/Nkoro','Emuoha','Abua','Tai','Chokocho','Kono','Oduoha-Emuoha',
            'Asarama','Gokana','Bori','Ikwerre','Khana','Omumma','Ogba/Egbema/Ndoni','Akuku Toru','Andoni','Ahoada East','Asari-Toru','Nkoroo','Okobie',
            'Igwuruta','Onikwu','Ahoada West','Bakana'
              ],
            'sokoto' :[
            'Sokoto','Wurno','Illela','Bodinga','Gwadabawa','Wamako','Goronyo','Shagari','Rabah','Binji','Gada','Kebbe','Sabon Birni','Makwa','Balle',
            'Isa','Tureta','Kware','Silame','Sokoto North','Yabo','Gudu','Tangaza','Sokoto South','Dange-Shuni','Tambuwal','G"id"an Madi','Degel','Maradun'
               ],
            'taraba' :[
            'Jalingo', 'Wukari','Bali','Ibi','Takum','Yorro','Lau','Donga','Karim Lam"id"o','Ardo-Kola','Muri','Zing','Gashaka','Gembu','Sardauna','Nguroje',
            'Dorofi','Ussa','Gassol','D"id"ango','Kurmi'
               ],
            'yobe' :[
            'Damaturu','Potiskum','Nguru','Gujba','Ge"id"am','Fune','Jakusko','Machina','Yusufari','Fika','Gashua','Gulani','Barde','Borsari','Yunusari','Tarmua',
            'Nangere','Gadaka/Shembire','Karasuwa','Gwio Kura','Dapchi','Kaga','Kumariya'
               ],
            'zamfara' :[
            'Gusua','Kaura Namoda','Tsafe','Anka','Shinkafi','Bungudu','Talata Mafara','Maru','Maradun','Gummi','Zurmi','Bukkuyum','Birnin Magaji/Kiyaw',
            'Kebbe','Isa','Tambuwal'
               ],
            'f.c.t' : [
                'Abuja','Gwagwalada','Kuje','Kwali','Bwari','Abaji','New Karu'
               ],








           
        },
        "lga": { 
                'abia' : [
                            'Aba North','Aba South','Arochukwu','Bende','Ikwuano','Isiala Ngwa North','Isiala Ngwa North','Isiala Ngwa South','Isuikwuato','Obi Ngwa',
                            'Ohafia','Osisioma Ngwa','Ugwunagbo','Ukwa East','Ukwa West','Umuahia North','Umuahia South','Umu Nneochi'
                            ],
                'adamawa' :[
                            'Demsa','Fufore','Ganye','Girei','Gombi','Guyuk','Hong','Jada','Lamurde','Madagali','Maiha','Mayo-Belwa','Michika','Mubi North','Mubi South',
                             'Numan','Shelleng','Song','Toungo','Yola North','Yola South'
                            ],
                'akwa ibom':[
                              'Abak','Eastern Obolo','Eket','Esit-Eket','Essien Udim','Etim-Ekpo','Etinan','Ibeno','Ibesikpo-Asutan','Ibiono-Ibom','Ika','Ikono','Ikot Abasi',
                              'Ikot Ekpene','Ini','Itu','Mbo','Mkpat-Enin','Nsit-Atai','Nsit-Ibom','Nsit-Ubium','Obot-Akara','Okobo','Onna','Oron','Oruk Anam','Ukanafun','Udung-Uko',
                              'Uruan','Urue-Offong/Oruko','Uyo'
                             ],
                'anambra':[
                              'Aguata','Awka North','Awka South','Anambra East','Anambra West','Anaocha','Ayamelum','Dunukofia','Ekwusigo','"id"emili North','"id"emili South','Ihiala',
                              'Njikoka','Nnewi North','Nnewi South','Ogbaru','Onitsha North','Onitsha South','Orumba North','Orumba South','Oyi'
                             ],
                'bauchi' :[
                             'Alkaleri', 'Bauchi','Bogoro','Darazo','Dass','Dukku','Gamawa','Ganjuwa','Kirfi','Misau','Ningi','Tafawa Balewa','Toro','Zaki','Warji',
                             'Darazo','Giade','Shira',`Jama'are`,'Katagum','Itas/Gadau','Damban'
                            ],
                'bayelsa' :[
                             'Brass', 'Ekeremor','Kolokuma/Opokuma','Nembe','Ogbia','Sagbama','Southern Ijaw','Yenagoa'
                            ],
                'benue' :[
                             'Ado','Agatu','Apa','Buruku','Gboko','Guma','Gwer East','Gwer West','Katsina-Ala','Konshisha','Kwande','Logo','Makurdi','Obi','Ogbadibo','Ohimini',
                             'Oju','Okpokwu','Otukpo','Tarka','Ukum','Ushongo','Vandeikya'
                             ],
                'borno' : [
                              'Ma"id"uguri','Ngala','Kala/Balge','Mafa','Konduga','Bama','Jere','Dikwa','Askira/Uba','Bayo','Biu','Chibok','Damboa','Gwoza','Hawul','Kwaya Kusar',
                              'Shani','	Abadam','Gubio','Guzamala','Kaga','Kukawa','Magumeri','Marte','Mobbar','Monguno','Nganzai'
                        ],
                'cross river' :[
                              'Abi','Akamkpa','Akpabuyo','Bekwarra','Bakassi','Biase','Boki','Calabar Municipal','Calabar South','Etung','Ikum','Obanliku','Obubra',
                              'Obudu','Odukpani','Ogoja','Yakuur','Yala'
                            ],
                'delta' : [
                              'Ethiope East','Ethiope West','Okpe','Sapele','Udu','Ughelli North','Ughelli South','Uvwie','Aniocha North','Aniocha South','Ika North East','Ika South',
                              'Ndokwa East','Ndokwa West','Oshimili North','Oshimili South','Ukwuani','Bomadi','Burutu','Isoko North','Isoko South','Patani','Warri North','Warri South','Warri South West'
                            ],
                'ebonyi' :[
                              'Abakaliki','Afikpo North','Afikpo South','Ebonyi','Ezaa North','Ezaa South','Ikwo','Ishielu','Ivo','Izzi','Ohaukwu','Ohaozara','Onicha'
                            ],
                'edo' :   [
                              'Akoko-Edo','Egor','Esan Central','Esan North-East','Esan South-East','Esan West','Etsako Central','Etsako East','Etsako West','Igueben','Ikpoba-Okha',
                              'Oredo','Orhionmwon','Ovia North-East','Ovia South-West','Owan East','Owan West','Uhunmwonde'
                            ],
                'ekiti':  [
                              'Ado-Ekiti','Ikere','Oye','Aiyekire (Gbonyin)','Efon','Ekiti East','Ekiti South-West','Ekiti West','Emure','"id"o-Osi','Ijero','Ikole','Ilejemeje',
                              'Irepodun/Ifelodun','Ise/Orun','Moba'
                              ],
                'enugu':    [
                              'Aninri','Awgu','Enugu East','Enugu North','Enugu South','Ezeagu','Igbo Etiti','Igbo Eze North','Igbo Eze South','Isi Uzo','Nkanu East','Nkanu West',
                              'Nsukka','Oji River','Udenu','Udi','Uzo-Uwani'
                              ],
                'gombe'   :[
                               'Akko','Balanga','Billiri','Dukku','Funakaye','Gombe','Kaltungo','Kwami','Nafada','Shongom','Yamaltu/Deba'
                              ],
                'imo'     :[
                           'Aboh Mbaise','Ahiazu Mbaise','Ehime Mbano','Ezinihitte Mbaise','"id"eato North','"id"eato South','Ihitte/Uboma','Ikeduru','Isiala Mbano','Isu',
                           'Mbaitoli','Ngor Okpala','Njaba','Nkwerre','Nwangele','Obowo','Oguta','Ohaji/Egbema','Okigwe','Onuimo','Orlu','Orsu','Oru East','Oru West','Owerri Municipal',
                           'Owerri North','Owerri West'
                               ],
                'jigawa'  :[
                            'Auyo','Babura','Biriniwa','Birnin Kudu','Buji','Dutse','Gagarawa','Garki','Gumel','Guri','Gwaram','Gwiwa','Hadejia','Jahun','Kafin Hausa','Kaugama',
                            'Kazaure','Kiri Kasama','Kiyawa','Maigatari','Malam Madori','Miga','Ringim','Roni','Sule Tankarkar','Taura','Yankwashi'
                
                               ],
                'kaduna'  : [
                            'Birnin Gwari','Chikun','Giwa','Igabi','Ikara','Jaba',`Jema'a`,'Kachia','Kaduna North','Kaduna South','Kagarko','Kajuru','Kaura','Kubau',
                            'Kudan','Lere','Makarf','Sabon Gari','Sanga','Soba','Zangon Kataf','	Zaria'
                               ],
                'kano' :    [
                            'Fagge','Dala','Gwale','Kano Municipal','Tarauni','Nassarawa','Kumbotso','Ungogo','Dawakin Tofa','Tofa','Rimin Gado','Bagwai','Gezawa','Gabasawa',
                            'Minjibir','Dambatta','Makoda','Kunchi','Bichi','Tsanyawa','Shanono','Gwarzo','Karaye','Rogo','Kabo','Bunkure','Kibiya','Rano','Tudun Wada','Doguwa',
                            'Madobi','Kura','Garun Mallam','Bebeji','Kiru','Sumaila','Garko','Takai','Albasu','Gaya','Ajingi','Wudil','Warawa','Dawakin Kudu'
                               ],
               'kastina' : [
                            'Bakori','Batagarawa','Batsari','Baure','Bindawa','Charanchi','Dan Musa','Dandume','Danja','Daura','Dutsi','Dutsin-Ma','Faskari','Funtua',
                            'Ingawa','Jibia','Kafur','Kaita','Kankara','Kankia','Katsina','Kurfi','Kusada',`Mai'Adua`,'Malumfashi','Mani','Mashi','Matazu','Musawa',
                            'Rimi','Sabuwa','Safana','Sandamu','Zango'
                              ],
               'kebbi'   : [
                             'Aleiro','Arewa Dandi','Argungu','Augie','Bagudo','Birnin Kebbi','Bunza','Dandi','Fakai','Gwandu','Jega', 'Nigeria','Kalgo','Koko/Besse','Maiyama','Ngaski','Sakaba','Shanga','Suru','Wasagu/Danko','Yauri','Zuru'
                                   
                              ],
               'kogi' : [
                             'Adavi','Ajaokuta','Ankpa','Bassa','Dekina','Ibaji','"id"ah','Igalamela-Odolu','Ijumu','Kabba/Bunu','Koton Karfe','Lokoja','Mopa-Muro','Ofu','Ogori/Magongo','Okehi','Okene','Olamaboro','Omala','Yagba East','Yagba West'
                               ],
               'kwara' :[
                             'Asa','Baruten','Edu','Ekiti','Ifelodun','Ilorin East','Ilorin South','Ilorin West','Irepodun','Isin','Kaiama','Moro','Offa','Oke Ero','Oyun','Pategi'
                             ],
               'lagos'  :[
                             'Agege','Alimosho','Ifako-Ijaye',	'Ikeja','Kosofe','Mushin','Oshodi-Isolo','Shomolu','Ikeja Division','Apapa','Eti-Osa','Lagos Island','Lagos Mainland','Surulere','Lagos Division','Ajeromi-Ifelodun','Amuwo-Odofin','Ojo','Badagry','Badagry Division',	'Ikorodu','Ikorodu Division','Ibeju-Lekki','Epe','Epe Division'
                             ],
               'nassarawa'   :[
                             'Akwanga Duhwa','Awe Hausa' , 'Doma' ,'Karu' , 'Keana','Keffi',	'Kokona','Lafia','Nasarawa Hausa','Nasarawa-Eggon','Obi	Alago','Toto Agatu','Wamba'
                             ],
               'niger'   :[
                            'Agaie','Agwara','B"id"a','Borgu','Bosso','Chanchaga','Edati','Gbako','Gurara','Katcha','Kontagora','Lapai','Lavun','Magama','Mariga','Mashegu','Mokwa','Munya','Paikoro','Rafi','Rijau','Shiroro','Suleja','Tafa','Wushishi'
                             ],
               'ogun'   :[
                            'Abeokuta North','Abeokuta South','Ado-Odo/Ota','Ewekoro','Ifo','Ijebu East','Ijebu North','Ijebu North East','Ijebu Ode','Ikenne','Imeko Afon','Ipokia','Obafemi Owode','Odogbolu','Odeda','Ogun Waters"id"e','Remo North','Sagamu(Shagamu)','Yewa North(formerly Egbado North)','Yewa South'
                             ],
               'ondo'    :[
                             'Akoko North-East (headquarters in Ikare)','Akoko North-West (headquarters in Okeagbe)','Akoko South-East (headquarters in Isua)','Akoko South-West (headquarters in Oka)','Akure North (headquarters in Iju / Itaogbolu)','Akure South (headquarters in Akure)','Ese Odo (headquarters in Igbekebo)','"id"anre (headquarters in Owena)','Ifedore (headquarters in Igbara Oke)','Ilaje (headquarters in Igbokoda)','Ile Oluji/Okeigbo (headquarters in Ile Oluji)','Irele (headquarters Ode-Irele)','Odigbo (headquarters in Ore)','Okitipupa (headquarters in Okitipupa)','Ondo East (headquarters in Bolorunduro)','Ondo West (headquarters Ondo Town)','Ose (headquarters in Ifon)','Owo (headquarters in Owo Town'
                             ],
               'osun'   : [
                             'Aiyedaade','Aiyedire','Atakunmosa East','Atakunmosa West','Boluwaduro','Boripe','Ede North','Ede South','Egbedore','Ejigbo','Ife Central','Ife East','Ife North','Ife South', 'Ifedayo','Ifelodun','Ila','Ilesa East','Ilesa West','Irepodun','Irewole','Isokan','Iwo','Obokun','Odo Otin','Ola Oluwa','Olorunda','Oriade','Orolu','Osogbo'
                             ],
               'oyo'   : [
                             'Afijio Jobele','Akinyele Moniya','Egbeda Egbeda','Ibadan North Agodi Gate','Ibadan North-East Iwo Road','Ibadan North-West Dugbe/Onireke','Ibadan South-West Ring Road','Ibadan South-East Mapo','Ibarapa Central Igbo Ora','Ibarapa East Eruwa','"id"o "id"o','Irepo Kisi-Okeogun','Iseyin Iseyin-Okeogun','Kajola Okeho-Okeogun','Lagelu Iyanaofa','Ogbomosho North Ogbomoso','Ogbomosho South Arowomole','Oyo West Ojongbodu','Atiba Ofa Meta','Atisbo Tede-Okeogun','Saki West Shaki-Okeogun','Saki East Agoamodu-Okeogun','Itesiwaju Otu-Okeogun','Iwajowa Iwereile-Okeogun','Ibarapa North Ayete','Olorunsogo Igbeti-Okeogun','Oluyole "id"i Ayunre','Ogo Oluwa Ajawa','Surulere Iresa Adu','Orelope Igboho-Okeogun','Ori Ire Ikoyi','Oyo East Kosobo','Ona Ara Akanran'
                             ],
               'plateau' : [
                             'Barkin Ladi','Bassa','Bokkos','Jos East','Jos North','Jos South','Kanam','Kanke','Langtang North','Langtang South','Mangu','Mikang','Pankshin','QuaanPan','Riyom'
                              ],
               'rivers'  : [
                             'Port Harcourt','Obio-Akpor','Okrika','Ogu–Bolo','Eleme','Tai','Gokana','Khana','Oyigbo','Opobo–Nkoro','Andoni','Bonny','Degema','Asari-Toru','Akuku-Toru','Abua–Odual','Ahoada West','Ahoada East','Ogba–Egbema–Ndoni','Emohua','Ikwerre','Etche','Omuma'
                               ],
               'sokoto'  : [
                             'Binji','Bodinga','Dange Shuni','Gada','Goronyo','Gudu','Gwadabawa','Illela','Isa','Kebbe','Kware','Rabah','Sabon Birni','Shagari','Silame','Sokoto North','Sokoto South','Tambuwal','Tangaza','Tureta'

                               ],
               'taraba' :  [
                            'Ardo Kola','Bali','Donga','Gashaka','Gassol','Ibi','Jalingo','Karim Lam"id"o','Kurmi','Lau','Sardauna','Takum','Ussa','Wukari','Yorro','Zing'
                               ],
               'yobe' :  [
                            'Bade','Bursari','Damaturu','Ge"id"am','Gujba','Gulani','Fika','Fune','Jakusko','Karasuwa','Machina','Nangere','Nguru','Potiskum','Tarmuwa','Yunusari','Yusufari'
                               ],
               'zamfara' :[
                            'Anka','Bakura','Birnin Magaji/Kiyaw','Bukkuyum','Bungudu','Chafe (Tsafe)','Gummi','Gusau','Kaura Namoda','Maradun','Maru','Shinkafi','Talata Mafara','Zurmi'
                            ]
                
                                             

               
                 
                
                




            }
    }
]