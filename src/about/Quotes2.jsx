import React, {useState} from 'react';

export default function Quotes2() {
    const [index,setIndex] = useState(0) 
    const quotes = [
        'Uvek uradi trezan ono što si rekao da ćeš uraditi pijan. To će te naučiti da držiš jezik za zubima. (Ernest Hemingvej, pisac)',
        'Pored muzike, najbolja stvar na svetu je pivo. (Karson Mekjulers, pisac)',
        'U vinu je mudrost, u pivu je sloboda, u vodi su bakterije (Abraham Linkoln, predsednik Amerike)',
        'Jedna dama mi je prišla i rekla: "Gospodine, vi ste pijani". Ja sam odgovorio: "Da, ja sam pijan danas. Sutra ću biti trezan, a vi ćete i dalje biti ružni!" (Vinston Čerčil, engleski državnik)',
        'Obišao sam hiljadu barova u nadi da će me neko ubiti, a sve što sam uradio jeste da sam ponovo uspeo da se napijem. (Čarls Bukovski, pisac)',
       'Dobri ljudi piju pivo. (Hanter Tompson, novinar) ',
        'Alkohol je možda čovekov najveći neprijatelj, ali Biblija kaže da treba da voliš svog neprijatelja. (Frenk Sinatra, pevač)',
       ' "Da li vi pijete?", "Naravno, upravo sam rekao da sam pisac." (Stiven King)',
       ' Često sam menjao prodavnica pića, zato što bi me prodavci zapamtili, jer sam dan i noć dolazio kod njih i kupovao velike količine alkohola. Tačno sam video da misle o tome kako je moguće da već nisam mrtav i bilo mi je neprijatno. Dobro, verovatno nisu o tome razmišljali, ali čovek postane paranoičan kada ima 300 mamurluka godišnje. (Čarls Bukovski)',
        'Ne postoji loš viski. Postoji samo vrste viskija koje nisu dobre kao ostali. (Rejmond Čendler)',
        'Pivo je intelektualno piće. Šteta što ga pije toliko idiota. (Rej Bredberi)',
        'Reči pijanog čoveka su misli trezong čoveka. (Anonim)',
       'Za alkohol, uzrok i rešenje svih životnih problema. ("Simpsonovi", serija)',
        'Pijem šampanjac kada pobedim, da proslavim. Pijem šampanjac kada izgubim, da se utešim (Napoleon, vojskovođa). '
    
    ]
    const Quote = ({text}) => {
        return(
        <p>{text}</p>
        )
    }

    return (
        <div className = 'quotes'>
            <b><Quote text={quotes[index]} /></b>
            <button className='btn-quotes' onClick={() => setIndex(Math.floor(Math.random()* quotes.length))}>Danasnji citat</button><br/>
        </div>
    )
}

















