const CV = {

    calidad: {
        c1: 'Toma válida para examen.',
        c2: 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.',
        c3: 'Toma válida para examen aunque limitada por hemorragia.',
        c4: 'Toma válida para examen aunque limitada por escasez de células.',
        c5: 'Toma válida para examen aunque limitada por intensa citolisis.',
        c6: 'Toma válida para examen aunque limitada por...',
        c7: 'Toma no valorable por desecación.',
        c8: 'Toma no valorable por ausencia de células...',
        c9: 'Toma no valorable por...'
    },
    interpretacion: {
        "1.1": 'Predominio de células epiteliales escamosas superficiales.',
        "1.2": 'Predominio de células epiteliales escamosas intermedias.',
        "1.3": 'Predominio de células epiteliales escamosas parabasales.',
        "1.4": 'Polinucleares neutrófilos.',
        "1.5": 'Hematíes.',
        "1.6": 'Células endocervicales en exocervix.',
        "1.7": 'Células metaplásicas en exocérvix.',
        "1.8": 'Células metaplásicas inmaduras.',
        "1.9": 'Células reactivas.',
        "1.10": 'Células endometriales en mujer ≥ de 40 años.',
        "1.11": 'Alteraciones celulares sugerentes con HPV.',
        "1.12": 'Alteraciones celulares sugerentes de Herpes.',
        "1.13": 'Células neoplásicas.',
        "1.14": 'Células superficiales e intermedias con cambios atípicos.',
        "1.15": 'Células intermedias y parabasales con algunos cambios atípicos.',
        "1.16": 'Células parabasales con algunos cambios atípicos.',
        "1.17": 'Células escamosas de significado incierto.',
        "1.18": 'Células epiteliales glandulares de significado incierto.',
        "1.19": 'Estructuras micóticas correspondientes a Candida albicans.',
        "1.20": 'Estructuras micóticas correspondientes a Candida glabrata.',
        "1.21": 'Estructuras bacterianas con disposición característica de actinomyces.',
        "1.22": 'Estructuras bacterianas correspondiente de Gardnerella vaginalis.',
        "1.23": 'Estructuras bacterianas de naturaleza cocácea.',
        "1.24": 'Estructuras bacterianas sugerentes de Leptothrix.',
        "1.25": 'Estructuras correspondientes a Trichomonas vaginalis.',
        "1.26": 'Células histiocitarias multinucleadas.',
        "1.27": 'Células epiteliales de tipo escamoso con intensos cambios atípicos.',
        "1.28": 'Presencia de epitelio endometrial sin cambios atípicos.',
        "1.29": 'Células epiteliales de apariencia glandular con núcleos amplios e irregulares.'
    }
};

const EX = {
    calidad: {
        h1: 'Muestra válida para examen.',
        h2: 'Muestra válida para examen aunque limitada por lipemia.',
        h3: 'Muestra válida para examen aunque limitada por hemólisis.',
        h4: 'Muestra válida para examen aunque limitada por aglutinación.',
        h5: 'Muestra válida para examen aunque limitada por coagulación.',
        h6: 'Muestra válida para examen aunque limitada por...',
        h7: 'Muestra no valorable por desnaturalización de proteínas.',
        h8: 'Muestra no valorable por contaminación bacteriana.',
        h9: 'Muestra no valorable por...'
    },
    interpretacion: {
        "2.1": 'Predominio de eritrocitos normocíticos normocrómicos.',
        "2.2": 'Predominio de eritrocitos microcíticos hipocrómicos.',
        "2.3": 'Presencia de esferocitos.',
        "2.4": 'Presencia de dianocitos (células en forma de lágrima).',
        "2.5": 'Leucocitos con predominio de neutrófilos.',
        "2.6": 'Leucocitos con predominio de linfocitos.',
        "2.7": 'Presencia de células blásticas.',
        "2.8": 'Presencia de eosinófilos aumentados.',
        "2.9": 'Presencia de basófilos aumentados.',
        "2.10": 'Trombocitosis (aumento de plaquetas).',
        "2.11": 'Trombocitopenia (disminución de plaquetas).',
        "2.12": 'Anomalías en la morfología plaquetaria.',
        "2.13": 'Presencia de células atípicas sugestivas de neoplasia.',
        "2.14": 'Presencia de células inmaduras del linaje mieloide.',
        "2.15": 'Presencia de células inmaduras del linaje linfático.',
        "2.16": 'Anisocitosis (variabilidad en el tamaño de los eritrocitos).',
        "2.17": 'Poiquilocitosis (variabilidad en la forma de los eritrocitos).',
        "2.18": 'Presencia de cuerpos de Howell-Jolly.',
        "2.19": 'Células con inclusiones de hierro (cuerpos de Pappenheimer).',
        "2.20": 'Presencia de parásitos intraeritrocitarios.'
    }
};

const O = {
    calidad: {
        u1: 'Muestra válida para examen.',
        u2: 'Muestra válida para examen aunque limitada por turbidez.',
        u3: 'Muestra válida para examen aunque limitada por coloración anormal.',
        u4: 'Muestra válida para examen aunque limitada por contaminación fecal.',
        u5: 'Muestra válida para examen aunque limitada por preservación inadecuada.',
        u6: 'Muestra válida para examen aunque limitada por volumen insuficiente.',
        u7: 'Muestra no valorable por deterioro.',
        u8: 'Muestra no valorable por contaminación con agentes externos.',
        u9: 'Muestra no valorable por...'
    },
    interpretacion: {
        "3.1": 'pH normal.',
        "3.2": 'pH elevado.',
        "3.3": 'pH reducido.',
        "3.4": 'Presencia de proteínas.',
        "3.5": 'Negativo para proteínas.',
        "3.6": 'Glucosa presente.',
        "3.7": 'Negativo para la glucosa.',
        "3.8": 'Cetonas detectadas.',
        "3.9": 'Negativo para cetonas.',
        "3.10": 'Hemoglobina presente.',
        "3.11": 'Negativo para hemoglobina.',
        "3.12": 'Bilirrubina detectada.',
        "3.13": 'Negativo para bilirrubina.',
        "3.14": 'Urobilinógeno normal.',
        "3.15": 'Urobilinógeno elevado.',
        "3.16": 'Presencia de nitritos.',
        "3.17": 'Negativo para nitritos.',
        "3.18": 'Presencia de leucocitos.',
        "3.19": 'Ausencia de leucocitos.',
        "3.20": 'Presencia de eritrocitos.',
        "3.21": 'Ausencia de eritrocitos.',
        "3.22": 'Células epiteliales.',
        "3.23": 'Cilindros hialinos.',
        "3.24": 'Cilindros granulosos.',
        "3.25": 'Cristales (oxalato de calcio, ácido úrico, etc.).',
        "3.26": 'Bacterias.',
        "3.27": 'Levaduras.',
        "3.28": 'Parásitos.'
    }
};
    
const E = {
    calidad: {
        e1: 'Muestra válida para examen.',
        e2: 'Muestra válida para examen aunque limitada por volumen insuficiente.',
        e3: 'Muestra válida para examen aunque limitada por presencia de sangre.',
        e4: 'Muestra válida para examen aunque limitada por contaminación con saliva.',
        e5: 'Muestra válida para examen aunque limitada por contaminación con secreciones nasales.',
        e6: 'Muestra válida para examen aunque limitada por presencia de alimentos.',
        e7: 'Muestra no valorable por descomposición.',
        e8: 'Muestra no valorable por...',
        e9: 'Muestra no valorable por...'
    },
    interpretacion: {
        "4.1": 'Presencia de células epiteliales escamosas.',
        "4.2": 'Presencia de células epiteliales columnares.',
        "4.3": 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).',
        "4.4": 'Presencia de células metaplásicas.',
        "4.5": 'Presencia de células malignas.',
        "4.6": 'Presencia de células atípicas sugestivas de neoplasia.',
        "4.7": 'Presencia de microorganismos (bacterias, hongos, micobacterias).',
        "4.8": 'Presencia de células sanguíneas (eritrocitos, plaquetas).',
        "4.9": 'Presencia de material mucoso o mucopurulento.',
        "4.10": 'Presencia de cristales (de colesterol, calcio, etc.).',
        "4.11": 'Ausencia de células significativas para el análisis.'
    }
};

const CB = {
    calidad: {
        b1: 'Muestra válida para examen.',
        b2: 'Muestra válida para examen aunque limitada por cantidad insuficiente de células.',
        b3: 'Muestra válida para examen aunque limitada por presencia de sangre.',
        b4: 'Muestra válida para examen aunque limitada por contaminación con alimentos.',
        b5: 'Muestra válida para examen aunque limitada por contaminación con saliva.',
        b6: 'Muestra válida para examen aunque limitada por...',
        b7: 'Muestra no valorable por deshidratación.',
        b8: 'Muestra no valorable por contaminación con microorganismos.',
        b9: 'Muestra no valorable por...'
    },
    interpretacion: {
        "5.1": 'Presencia de células epiteliales escamosas.',
        "5.2": 'Presencia de células epiteliales cilíndricas.',
        "5.3": 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).',
        "5.4": 'Presencia de células glandulares.',
        "5.5": 'Presencia de células metaplásicas.',
        "5.6": 'Presencia de células atípicas sugestivas de neoplasia.',
        "5.7": 'Presencia de microorganismos (bacterias, hongos, levaduras).',
        "5.8": 'Presencia de células anormales con cambios citológicos.',
        "5.9": 'Ausencia de células significativas para el análisis.'
    }
};

const arrayObjetos = [
    CV,
    EX,
    O,
    E,
    CB
];

export const buscarEstudio = (nombreBuscar) => {
    arrayObjetos.find(nombreBuscar) //! No creo que funcione
}