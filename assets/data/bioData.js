window.bioData = {
  "bacillus": {
    "name": "Bacillus (Priestia)",
    "sub": "Solubilização de Fósforo e Biocontrole",
    "descShort": "Bactérias Gram-positivas de robustez extrema. Reclassificações recentes incluem o gênero Priestia (ex-Bacillus megaterium/aryabhattai).",
    "descLong": "O gênero <strong>Bacillus</strong> (e <strong>Priestia</strong>) é a base dos inoculantes resistentes. A estirpe <em>Priestia aryabhattai</em> destaca-se pela resistência à seca e salinidade, enquanto <em>Priestia megaterium</em> mantém o protagonismo na solubilização de fosfato.",
    "image": "assets/colonia bacillus.png",
    "effectImages": [
      { "url": "assets/efeito bacillus.png", "cap": "Comparativo Visual: Raízes mais profundas e volumosas em plantas tratadas." },
      { "url": "assets/efeito bacillus2.png", "cap": "Detalhe microscópico: Biofilme bacteriano colonizando a superfície radicular." }
    ],
    "strains": ["B. subtilis (CNPMS B2084)", "Priestia megaterium (CNPMS B119)", "Priestia aryabhattai", "B. velezensis SAC36"],
    "colors": { "main": "#38bdf8", "hex": "#38bdf8" },
    "lab": { "temp": 30, "ph": 7.5, "conc": 9, "aia": 40, "psol": 90, "nfix": 20, "biocontrol": 95, "label": "Estável" },
    "tech": { "temp": "25-35°C", "media": "TSB / Agar Nutriente", "ph": "6.0-8.0", "conc": "10⁹ esporos/mL" },
    "app": { "crops": "Milho, Soja, Hortaliças", "soil": "Latossolos e Solos Salinos", "env": "Tolerante a Seca/Calor", "method": "Tratamento Semente ou Sulco" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Áreas com fósforo travado (alto P total e baixo P disponível) ou resposta fraca à adubação fosfatada.",
        "Talhões com compactação moderada ou estrutura degradada, onde se busca maior exploração radicular.",
        "Sistemas com alta pressão de doenças de solo (murchas, podridões de raiz, damping-off).",
        "Ambientes sob estresse hídrico recorrente ou ondas de calor (estirpes como P. aryabhattai)."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Solos bem estruturados com níveis adequados de fósforo disponível.",
        "Áreas com uso rotineiro de fungicidas de solo de amplo espectro.",
        "Situações onde se espera ganhos imediatos elevados sem foco em estabilidade de médio prazo."
      ],
      "oQueObservarNaLavoura": [
        "Raízes mais profundas e ramificadas na camada 0–20 cm.",
        "Solo mais 'solto' e agregado ao redor das raízes (rizosfera).",
        "Menor incidência de murcha nas horas mais quentes do dia."
      ],
      "traducaoParaManejo": "Pense no Bacillus como um 'canivete suíço': ajuda a soltar o fósforo preso, protege a raiz contra doenças e cria uma capa de solo saudável ao redor da raiz.",
      "compatibilidadePratica": {
        "misturaTanque": "Evitar misturar com fungicidas cúpricos ou de pH extremo. Adicionar por último.",
        "observacoesManejo": "Não deixar sementes inoculadas expostas ao sol. Aplicar preferencialmente em até 24h."
      }
    },
    "doseInfo": {
      "range": "10⁹ Esporos/mL",
      "justification": "Alta densidade celular para garantir germinação e competição com a microflora nativa.",
      "critical": "A forma esporulada garante estabilidade, mas requer ativação em solo úmido."
    },
    "mechanisms": [
      { "t": "Solubilização de P", "d": "Priestia megaterium solubiliza fosfatos complexos." },
      { "t": "Resistência a Estresse", "d": "Priestia aryabhattai confere tolerância à seca e salinidade." },
      { "t": "Biocontrole", "d": "Bacillus velezensis/subtilis formam barreira protetora contra fungos." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [40, 85, 70, 75, 95, 60, 20, 80], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Solo Seco/Salino", "s": "Condição adversa." },
      { "t": "Priestia spp.", "s": "Ativação e proteção." },
      { "t": "Mecanismo", "s": "Osmorregulação e Solub. P." },
      { "t": "Efeito", "s": "Sobrevivência e Vigor." }
    ],
    "table": [
      { "c1": "Priestia megaterium", "c2": "Milho", "c3": "Solubilização de P", "c4": "Aumento de eficiência de fertilizantes." },
      { "c1": "Priestia aryabhattai", "c2": "Culturas Gerais", "c3": "Tolerância Hídrica", "c4": "Resiliência em seca." }
    ],
    "caseStudy": {
      "title": "Eficiência em Solos com P Fixado",
      "desc": "A co-inoculação demonstrou aumento significativo de produtividade em solos tropicais com alta fixação de fósforo.",
      "ref": "Oliveira-Paiva et al., 2024. Frontiers in Microbiology.",
      "chartData": { "labels": ["Controle", "B. megaterium", "B. subtilis", "Co-Inoculação"], "data": [100, 115, 112, 124] }
    }
  },
  "fixadores": {
    "name": "Azospirillum spp.",
    "sub": "Fixação biológica associativa",
    "descShort": "Associativos em gramíneas. Produção massiva de hormônios (AIA) e FBN livre.",
    "descLong": "O <strong>Azospirillum brasilense</strong> (estirpes Ab-V5 e Ab-V6) atua na produção de fitohormônios que expandem o sistema radicular, aumentando a absorção de água e nutrientes.",
    "image": "assets/colonia Azospirillum.jpeg",
    "effectImages": [
      { "url": "assets/efeito Azospirillum.jpeg", "cap": "Explosão Radicular: Aumento massivo de raízes secundárias." },
      { "url": "assets/efeito Azospirillum2.jpeg", "cap": "Comparativo em Milho: Sistema radicular mais robusto." }
    ],
    "strains": ["A. brasilense (Ab-V5, Ab-V6)", "A. zeae"],
    "colors": { "main": "#22c55e", "hex": "#22c55e" },
    "lab": { "temp": 29, "ph": 6.5, "conc": 7.5, "aia": 90, "psol": 40, "nfix": 60, "biocontrol": 30, "label": "Enraizador" },
    "tech": { "temp": "20-35°C", "media": "NFb", "ph": "5.5-7.5", "conc": "10⁸-10¹⁰ UFC/mL" },
    "app": { "crops": "Milho, Trigo, Pastagens", "soil": "Qualquer", "env": "Microaerófilo", "method": "Sulco ou Semente" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Cultivos de gramíneas visando reduzir parte da adubação nitrogenada.",
        "Áreas sob estresse hídrico moderado (necessidade de raiz profunda).",
        "Primeiros anos de intensificação de pastagens ou ILP."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Sistemas com doses muito altas de N mineral (teto produtivo).",
        "Solos extremamente arenosos sem correção prévia.",
        "Semeaduras muito tardias sob forte estresse térmico."
      ],
      "oQueObservarNaLavoura": [
        "Sistema radicular mais volumoso e 'cabeleira' densa.",
        "Plantas mais verdes e vigorosas em faixas comparativas.",
        "Maior tolerância a veranicos moderados."
      ],
      "traducaoParaManejo": "O Azospirillum é o 'personal trainer' da raiz: estimula a planta a criar mais boca para comer água e adubo, além de dar um bônus de nitrogênio.",
      "compatibilidadePratica": {
        "misturaTanque": "Evitar misturar com herbicidas e inseticidas agressivos. Testar antes.",
        "observacoesManejo": "Bactéria sensível à luz e seca. Aplicar rápido após inoculação."
      }
    },
    "doseInfo": {
      "range": "10⁸ - 10¹⁰ UFC/mL",
      "justification": "Alta concentração garante colonização do córtex radicular.",
      "critical": "Sensível à dessecação. Evitar exposição solar direta."
    },
    "mechanisms": [
      { "t": "Fitohormônios", "d": "Produção de AIA estimula raízes." },
      { "t": "FBN Associativa", "d": "Fixação de N em microaerofilia." },
      { "t": "Resiliência", "d": "Aumenta tolerância à seca." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [85, 50, 30, 70, 30, 85, 60, 60], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Raiz", "s": "Exsudatos." },
      { "t": "Azospirillum", "s": "Produção AIA." },
      { "t": "Efeito", "s": "Mais Raízes = Mais Água." }
    ],
    "table": [
      { "c1": "A. brasilense Ab-V5/V6", "c2": "Milho/Trigo", "c3": "Hormônios + FBN", "c4": "Aumento de produtividade e raízes." }
    ],
    "caseStudy": {
      "title": "Promoção de Crescimento em Milho",
      "desc": "A inoculação com A. brasilense Ab-V5 e Ab-V6 demonstrou aumentos consistentes na área superficial de raiz e na biomassa seca da parte aérea em diversas condições de campo.",
      "ref": "Hungria, M., et al. (2010). Field Crops Research, 119(1), 139-145.",
      "chartData": { "labels": ["Controle", "A. brasilense"], "data": [100, 118] }
    }
  },
  "rhizobium": {
    "name": "Rhizobium/Brady",
    "sub": "Simbiose nodular em leguminosas",
    "descShort": "Especialistas em leguminosas. Fixação simbiótica de N de alta eficiência.",
    "descLong": "<strong>Bradyrhizobium</strong> (Soja) e <strong>Rhizobium</strong> (Feijão) são essenciais. As estirpes SEMIA 5079/5080 representam o padrão de eficiência para soja no Brasil.",
    "image": "assets/colonia Bradyrhizobium.jpeg",
    "effectImages": [
      { "url": "assets/efeito Rhyzobium.jpg", "cap": "Nodulação de Elite: Nódulos abundantes na coroa da raiz principal." },
      { "url": "assets/efeito Rhyzobium2.jpg", "cap": "Viabilidade Interna: Nódulo cortado vermelho (Leghemoglobina)." }
    ],
    "strains": ["Bradyrhizobium (SEMIA 5079/5080/5019)", "Rhizobium leguminosarum"],
    "colors": { "main": "#f97316", "hex": "#f97316" },
    "lab": { "temp": 30, "ph": 6.8, "conc": 9, "aia": 30, "psol": 20, "nfix": 100, "biocontrol": 40, "label": "Específico" },
    "tech": { "temp": "25-30°C", "media": "YEM", "ph": "6.0-7.0", "conc": "10⁸-10¹⁰ UFC/mL" },
    "app": { "crops": "Soja, Feijão, Ervilha", "soil": "Corrigido", "env": "pH Neutro", "method": "Inoculação Semente/Sulco" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Sempre na cultura da Soja (indispensável).",
        "Áreas de primeiro ano de cultivo (abertura) ou reforma.",
        "Solos onde a população nativa de rizóbios é ineficiente."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Solos ácidos não corrigidos (pH baixo inibe a nodulação).",
        "Uso excessivo de N mineral na base (inibe a formação de nódulos).",
        "Sementes tratadas com fungicidas tóxicos há muito tempo."
      ],
      "oQueObservarNaLavoura": [
        "Número de nódulos na raiz principal (coroa).",
        "Cor interna dos nódulos: deve ser vermelha/rosada.",
        "Ausência de clorose (amarelamento) na fase vegetativa."
      ],
      "traducaoParaManejo": "É o 'saco de ureia biológico'. O nódulo é uma fábrica que troca nitrogênio do ar por açúcar da planta.",
      "compatibilidadePratica": {
        "misturaTanque": "Sensível a metais tóxicos (ex: Cobre) e altas concentrações salinas. No entanto, a aplicação de Co e Mo (essenciais para FBN) em doses agronômicas é necessária e compatível se a inoculação for imediata.",
        "observacoesManejo": "Calor mata a bactéria. Semear imediatamente após inoculação."
      }
    },
    "doseInfo": {
      "range": "10⁹ - 10¹⁰ UFC/mL",
      "justification": "Dose massiva para garantir nodulação primária na raiz principal.",
      "critical": "Compatibilidade com químicos é crítica. Morrem rapidamente com fungicidas e metais como Cobalto/Molibdênio em altas doses na semente (tóxicos por salinidade)."
    },
    "mechanisms": [
      { "t": "Nodulação", "d": "Formação de nódulos fixadores." },
      { "t": "FBN Simbiótica", "d": "Conversão de N2 em amônia." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [30, 20, 20, 40, 40, 60, 100, 50], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Semente", "s": "Inoculação." },
      { "t": "Raiz", "s": "Infecção/Nódulo." },
      { "t": "Planta", "s": "FBN (Nitrogênio)." }
    ],
    "table": [
      { "c1": "Bradyrhizobium SEMIA", "c2": "Soja", "c3": "FBN Simbiótica", "c4": "Substituição total de N mineral." },
      { "c1": "R. leguminosarum", "c2": "Feijão/Ervilha", "c3": "FBN Específica", "c4": "Aumento de produtividade." }
    ],
    "caseStudy": {
      "title": "Fixação Biológica em Soja",
      "desc": "Substituição total de nitrogênio mineral com produtividades superiores a 4 ton/ha.",
      "ref": "M. Hungria et al., 2013. Soil Biology.",
      "chartData": { "labels": ["N Mineral", "Inoculante"], "data": [3800, 3950] }
    }
  },
  "methylobacterium": {
    "name": "Methylobacterium",
    "sub": "Bactérias Rosa (Folha e Raiz)",
    "descShort": "Bactérias pigmentadas de rosa que colonizam a superfície foliar (filosfera) e raízes, fixando nitrogênio e produzindo citocininas.",
    "descLong": "<em>Methylobacterium symbioticum</em> coloniza a filosfera. Utiliza metanol exsudado pelos estômatos, fixando N atmosférico (complementar, não substitutivo) e produzindo citocininas.",
    "image": "assets/colonia Methylobacterium.jpeg",
    "effectImages": [
      { "url": "assets/efeito Methylobacterium.jpeg", "cap": "Efeito \"Stay-green\": Retenção de clorofila em folhas sob estresse." },
      { "url": "assets/efeito Methylobacterium2.jpeg", "cap": "Vigor Foliar: Planta tratada apresenta maior área foliar e sanidade." }
    ],
    "strains": ["Methylobacterium symbioticum"],
    "colors": { "main": "#ec4899", "hex": "#ec4899" },
    "lab": { "temp": 28, "ph": 7.0, "conc": 8, "aia": 60, "psol": 30, "nfix": 80, "biocontrol": 20, "label": "Filosfera" },
    "tech": { "temp": "25-37°C", "media": "Meio com Metanol", "ph": "6.0-8.0", "conc": "10⁸ UFC/mL" },
    "app": { "crops": "Soja, Milho, Café, Hortifruti", "soil": "Aplicação Foliar (Independente do solo)", "env": "Pleno Sol (Pigmento protege UV)", "method": "Pulverização Foliar" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Previsão de veranicos ou altas temperaturas (estresse térmico).",
        "Fases de crescimento rápido onde a planta produz muito metanol.",
        "Quando se busca o efeito 'Stay-green' (manter folha verde)."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Períodos de chuvas contínuas logo após aplicação (lavagem).",
        "Baixa luminosidade ou climas muito frios.",
        "Aplicações tardias com cultura em senescência."
      ],
      "oQueObservarNaLavoura": [
        "Folhas mais verdes e túrgidas nas horas quentes.",
        "Menor incidência de escaldadura solar.",
        "Retardo no amarelamento do baixeiro."
      ],
      "traducaoParaManejo": "É o 'protetor solar' com vitaminas. Vive na folha, come metanol (toxina) e devolve nitrogênio.",
      "compatibilidadePratica": {
        "misturaTanque": "Compatível com adubos foliares, evitar pH ácido ou cobre.",
        "observacoesManejo": "Aplicar pela manhã para colonização dos estômatos."
      }
    },
    "doseInfo": {
      "range": "10⁸ UFC/mL",
      "justification": "Dose ajustada para colonização rápida dos estômatos e superfície foliar.",
      "critical": "A aplicação deve garantir cobertura foliar. Pigmentos rosas conferem proteção UV, mas a bactéria depende de tecido vivo."
    },
    "mechanisms": [
      { "t": "Fixação de N Foliar", "d": "Fornecimento complementar de nitrogênio." },
      { "t": "Consumo de Metanol", "d": "Metanol é tóxico para a planta; sua remoção aumenta o vigor." },
      { "t": "Citocininas", "d": "Retarda a senescência foliar (efeito Stay-green)." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [60, 30, 20, 40, 20, 80, 80, 50], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Folha", "s": "Exsudação de Metanol." },
      { "t": "Methylobacterium", "s": "Consumo de Metanol + FBN." },
      { "t": "Efeito", "s": "Mais Fotossíntese e N." }
    ],
    "table": [
      { "c1": "M. symbioticum", "c2": "Soja/Milho", "c3": "FBN Foliar + Citocininas", "c4": "Maior enchimento de grãos e sanidade foliar." }
    ],
    "caseStudy": {
      "title": "Aumento de Produtividade em Soja via Aplicação Foliar",
      "desc": "A aplicação foliar de Methylobacterium symbioticum melhorou a aquisição de nitrogênio e a eficiência fotossintética, resultando em aumentos de produtividade em condições de campo.",
      "ref": "Rossetto, E. A., et al. (2023). Field Crops Research, 291, 108778.",
      "chartData": { "labels": ["Controle", "M. symbioticum"], "data": [3200, 3580] }
    }
  },
  "bioinseticidas": {
    "name": "Bioinseticidas",
    "sub": "Controle Biológico Avançado",
    "descShort": "Bactérias e fungos entomopatogênicos para controle de pragas difíceis como lagartas, trips e percevejos.",
    "descLong": "A nova geração de bioinseticidas inclui bactérias como <em>Chromobacterium subtsugae</em> e <em>Saccharopolyspora spinosa</em>, além dos fungos clássicos. Oferecem controle específico sem resíduos químicos, atuando por ingestão ou contato.",
    "image": "assets/colonia Beauveria.jpeg",
    "effectImages": [
      { "url": "assets/efeito Bauveria.jpeg", "cap": "Esporulação fúngica sobre o exoesqueleto da lagarta (mumificação)." },
      { "url": "assets/efeito Bauveria2.jpeg", "cap": "Controle Populacional: Colônia de fungos eliminando praga alvo." }
    ],
    "strains": ["Chromobacterium subtsugae", "Saccharopolyspora spinosa", "Beauveria bassiana", "Metarhizium anisopliae"],
    "colors": { "main": "#6366f1", "hex": "#6366f1" },
    "lab": { "temp": 25, "ph": 6.5, "conc": 8, "aia": 0, "psol": 0, "nfix": 0, "biocontrol": 100, "label": "Inseticida" },
    "tech": { "temp": "20-30°C (Fungos exigem umidade)", "media": "Meios específicos", "ph": "5.0-9.0 (Bactérias)", "conc": "Variável" },
    "app": { "crops": "Todas as culturas", "soil": "Aplicação Foliar", "env": "Alta umidade (Fungos) / Variável (Bactérias)", "method": "Pulverização dirigida" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Manejo de resistência (rotacionar químicos).",
        "Controle de pragas em estágios iniciais.",
        "Áreas próximas a sedes ou água (baixa toxicidade)."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Infestações 'explosivas' com população adulta muito alta.",
        "Aplicação de fungos em dias secos (<50%) e sol forte.",
        "Mistura com fungicidas químicos potentes."
      ],
      "oQueObservarNaLavoura": [
        "Insetos 'mumificados' (cobertos de pó).",
        "Redução progressiva dos danos em folhas novas.",
        "Lagartas paralisadas."
      ],
      "traducaoParaManejo": "São 'doenças de inseto' engarrafadas. Não derruba na hora igual veneno de choque, mas zera a praga em 3-5 dias sem resíduo.",
      "compatibilidadePratica": {
        "misturaTanque": "NUNCA misturar fungos com fungicidas químicos.",
        "observacoesManejo": "Aplicar fim de tarde ou noite (alta umidade)."
      }
    },
    "doseInfo": {
      "range": "Variável (Esporos/mL ou Metabólitos)",
      "justification": "Dose letal depende do estágio da praga (lagartas jovens são mais suscetíveis).",
      "critical": "Para fungos (Beauveria), umidade alta (>70%) é vital. Para bactérias, o pH da calda é crítico."
    },
    "mechanisms": [
      { "t": "Infecção Cuticular", "d": "Fungos penetram o exoesqueleto do inseto." },
      { "t": "Toxinas Orais", "d": "Bactérias produzem proteínas tóxicas após ingestão." },
      { "t": "Ação Neural", "d": "Espinocinas (Saccharopolyspora) afetam sistema nervoso." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [0, 0, 0, 0, 100, 0, 0, 85], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Praga Alvo", "s": "Lagarta/Percevejo." },
      { "t": "Aplicação", "s": "Contato ou Ingestão." },
      { "t": "Ação", "s": "Paralisia ou Infecção." },
      { "t": "Resultado", "s": "Morte da praga." }
    ],
    "table": [
      { "c1": "Chromobacterium subtsugae", "c2": "Milho/Soja", "c3": "Múltipla ação (Repelência/Toxicidade)", "c4": "Controle de lagartas e percevejos." },
      { "c1": "Saccharopolyspora spinosa", "c2": "Hortifruti", "c3": "Neurotoxina natural", "c4": "Controle de trips e minadores." },
      { "c1": "Beauveria/Metarhizium", "c2": "Geral", "c3": "Colonização fúngica", "c4": "Controle de cigarrinhas e mosca-branca." }
    ],
    "caseStudy": {
      "title": "Controle de Spodoptera frugiperda",
      "desc": "Redução de 85% na população de lagartas em milho safrinha comparado ao controle, com menor impacto sobre inimigos naturais.",
      "ref": "Embrapa Milho e Sorgo, Circ. Téc. 2022.",
      "chartData": { "labels": ["Testemunha", "Químico", "Bioinseticida"], "data": [100, 25, 15] }
    }
  },
  "pseudomonas": {
    "name": "Pseudomonas spp.",
    "sub": "Rizobactérias fluorescentes e sideróforos",
    "descShort": "Gram-negativas de crescimento explosivo. Dominam a rizosfera inicial e sequestram ferro via sideróforos.",
    "descLong": "Estirpes de <strong>Pseudomonas fluorescens</strong> possuem extraordinária capacidade de colonização do rizoplano. A produção de sideróforos (quelantes de ferro) priva patógenos de nutrientes, enquanto a solubilização de fósforo nutre a planta.",
    "image": "assets/colonia pseudomonas.jpeg",
    "effectImages": [
      { "url": "assets/efeito Pseudomonas.jpeg", "cap": "Colonização concêntrica: Raiz em corte transversal com Pseudomonas na superfície radicular." },
      { "url": "assets/efeito Pseudomonas2.jpeg", "cap": "Efeito Sideróforo: Planta tratada verde vs controle clorótico (falta de Fe)." }
    ],
    "strains": ["P. fluorescens (VNMKV1)", "P. putida"],
    "colors": { "main": "#a855f7", "hex": "#a855f7" },
    "lab": { "temp": 28, "ph": 6.5, "conc": 8.5, "aia": 50, "psol": 95, "nfix": 10, "biocontrol": 80, "label": "Agressivo" },
    "tech": { "temp": "20-30°C", "media": "King's B", "ph": "6.0-7.5", "conc": "10⁸-10¹⁰ UFC/mL" },
    "app": { "crops": "Trigo, Leguminosas (Co-inoculação)", "soil": "Baixo Ferro", "env": "Umidade Constante", "method": "Líquido (Proteção Osmótica)" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Solos frios ou úmidos onde Bacillus demora a arrancar.",
        "Áreas com histórico de podridões radiculares (limpeza).",
        "Culturas de ciclo curto que exigem enraizamento explosivo."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Regiões de clima muito seco e solos arenosos quentes.",
        "Aplicação em semente para armazenamento (baixa sobrevivência).",
        "Solos encharcados sem oxigênio."
      ],
      "oQueObservarNaLavoura": [
        "Arranque inicial mais rápido da cultura.",
        "Raízes claras e sadias, sem lesões escuras.",
        "Estande uniforme."
      ],
      "traducaoParaManejo": "É o 'velocista' do solo. Cresce rápido, ocupa espaço e 'rouba' o ferro que as doenças precisam para crescer.",
      "compatibilidadePratica": {
        "misturaTanque": "Suscetível a choque salino. Evitar adubos concentrados.",
        "observacoesManejo": "Produto perecível. Plantar imediatamente após tratar."
      }
    },
    "doseInfo": {
      "range": "10⁸ - 10¹⁰ UFC/mL",
      "justification": "Como estrategistas-r, exigem altas populações para colonização rápida.",
      "critical": "Bactérias não-esporulantes. Exige proteção osmótica na formulação."
    },
    "mechanisms": [
      { "t": "Sideróforos", "d": "Vantagem competitiva por Ferro." },
      { "t": "Solubilização de P", "d": "Liberação de fósforo fixado." },
      { "t": "Biofilmes", "d": "Colonização agressiva da raiz." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [50, 95, 95, 80, 80, 40, 10, 90], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Rizoplano", "s": "Exsudatos." },
      { "t": "Pseudomonas", "s": "Colonização Rápida." },
      { "t": "Mecanismo", "s": "Sideróforos (Fe)." },
      { "t": "Efeito", "s": "Sanidade e P." }
    ],
    "table": [
      { "c1": "P. fluorescens", "c2": "Trigo/Soja", "c3": "Sideróforos + Solub. P", "c4": "Promoção de saúde e vigor." },
      { "c1": "P. putida", "c2": "Leguminosas", "c3": "Helper de Nodulação", "c4": "Aumenta eficiência de rizóbios." }
    ],
    "caseStudy": {
      "title": "Desenvolvimento de Solos Supressivos",
      "desc": "Em solos supressivos à Rhizoctonia solani, observou-se um enriquecimento de bactérias do gênero Pseudomonas, que foram cruciais para a proteção contra o patógeno.",
      "ref": "Mendes, R., et al. (2011). Science, 332(6033), 1097-1100.",
      "chartData": { "labels": ["Solo Conducente", "Solo Supressivo"], "data": [80, 20] }
    }
  },
  "trichoderma": {
    "name": "Trichoderma",
    "sub": "Biofungicida de Solo",
    "descShort": "Fungo de crescimento rápido que parasita escleródios e hifas de patógenos (Rhizoctonia, Fusarium, Sclerotinia).",
    "descLong": "<strong>Trichoderma harzianum</strong> é o 'cão de guarda' da rizosfera. Cresce mais rápido que os patógenos, competindo por espaço e nutrientes, além de realizar micoparasitismo direto.",
    "image": "assets/colonia trichoderma.jpeg",
    "effectImages": [
      { "url": "assets/efeito Trichoderma.jpeg", "cap": "Hiperparasitismo: Hifas de Trichoderma enrolando e digerindo patógeno." },
      { "url": "assets/efeito Trichoderma2.png", "cap": "Raiz Sadia: Ausência de lesões em solo infestado." }
    ],
    "strains": ["Trichoderma harzianum (T-22, 1306)", "Trichoderma asperellum"],
    "colors": { "main": "#16a34a", "hex": "#16a34a" },
    "lab": { "temp": 26, "ph": 6.0, "conc": 7, "aia": 30, "psol": 40, "nfix": 0, "biocontrol": 95, "label": "Biofungicida" },
    "tech": { "temp": "20-30°C", "media": "PDA", "ph": "5.0-6.5", "conc": "10⁸ Esporos/g" },
    "app": { "crops": "Soja, Feijão, Algodão, Hortifruti", "soil": "Úmido e Rico em M.O.", "env": "Alta Umidade", "method": "TS, Sulco ou Drench" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Histórico de doenças de solo (Mofo branco, Rhizoctonia, Fusarium).",
        "Produção de mudas e hortaliças.",
        "Manejo de restos culturais (acelera decomposição)."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Mistura com fungicidas químicos no tanque (morte dos esporos).",
        "Aplicação em solo seco e quente (dessecação).",
        "Doenças foliares (ação restrita ao solo/raiz)."
      ],
      "oQueObservarNaLavoura": [
        "Redução de 'reboleiras' de plantas mortas.",
        "Raízes brancas e sem lesões.",
        "Emergência uniforme."
      ],
      "traducaoParaManejo": "É um fungo que come outros fungos. Precisa chegar antes da doença para proteger o lugar.",
      "compatibilidadePratica": {
        "misturaTanque": "PROIBIDO misturar com fungicidas. Aplicar separado.",
        "observacoesManejo": "Armazenar em geladeira se possível. Produto vivo."
      }
    },
    "doseInfo": {
      "range": "10⁷ - 10⁹ Esporos/g",
      "justification": "Alta carga de esporos para colonização agressiva.",
      "critical": "Sensível a UV e seca. Cobrir o solo após aplicação."
    },
    "mechanisms": [
      { "t": "Micoparasitismo", "d": "Enzimas (quitinases) degradam parede do patógeno." },
      { "t": "Competição", "d": "Ocupa o nicho antes da doença." },
      { "t": "Estímulo", "d": "Produz auxinas que vigoram a raiz." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [30, 40, 20, 20, 95, 30, 0, 80], "label": "Perfil funcional" },
    "flow": [
      { "t": "Esporo", "s": "Germinação." },
      { "t": "Hifa", "s": "Reconhecimento." },
      { "t": "Ataque", "s": "Enrolamento/Lise." }
    ],
    "table": [
      { "c1": "T. harzianum", "c2": "Soja/Feijão", "c3": "Mofo Branco", "c4": "Redução de escleródios." },
      { "c1": "T. asperellum", "c2": "Hortaliças", "c3": "Fusarium/Rhizoctonia", "c4": "Sanidade radicular." }
    ],
    "caseStudy": {
      "title": "Efeito de T. harzianum na Promoção de Crescimento em Alface",
      "desc": "A inoculação com Trichoderma harzianum (cepa T-22) em sistema de cultivo protegido demonstrou aumento significativo no peso fresco e na absorção de nutrientes em comparação ao controle.",
      "ref": "Tucci, M., et al. (2011). Crop Protection, 30(10), 1353-1359.",
      "chartData": { "labels": ["Controle", "Trichoderma"], "data": [100, 125] }
    }
  },
  "micorrizas": {
    "name": "Micorrizas",
    "sub": "Extensão Radicular",
    "descShort": "Fungos Arbusculares que formam uma rede de hifas, multiplicando a área de absorção da raiz em até 100x.",
    "descLong": "<strong>Fungos Micorrízicos Arbusculares (FMA)</strong> penetram nas células da raiz e estendem hifas para o solo, absorvendo água e fósforo em microporos inacessíveis à raiz. Produzem glomalina, que estrutura o solo.",
    "image": "assets/colonia micorriza.jpg",
    "effectImages": [
      { "url": "assets/efeito micorriza.jpg", "cap": "Rede de Hifas: Extensão microscópica explorando o solo." },
      { "url": "assets/efeito micorriza2.jpg", "cap": "Vesículas e Arbúsculos: Estruturas de troca dentro da raiz." }
    ],
    "strains": ["Rhizophagus irregularis", "Glomus spp."],
    "colors": { "main": "#d97706", "hex": "#d97706" },
    "lab": { "temp": 28, "ph": 6.5, "conc": 4, "aia": 10, "psol": 40, "nfix": 0, "biocontrol": 40, "label": "Simbiose" },
    "tech": { "temp": "Variável", "media": "Biotrófico (Requer hospedeiro vivo)", "ph": "5.5-8.0", "conc": "Esporos/g ou Propágulos" },
    "app": { "crops": "Milho, Soja, Café, Cana", "soil": "Pobre em P", "env": "Solo Aerado", "method": "Semente ou Sulco" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Solos com baixo fósforo disponível.",
        "Recuperação de áreas degradadas ou arenosas.",
        "Culturas dependentes de micorriza (ex: citros, café)."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Solos com teor muito alto de fósforo (inibe a simbiose).",
        "Uso excessivo de fungicidas sistêmicos.",
        "Solos encharcados (anaerobiose)."
      ],
      "oQueObservarNaLavoura": [
        "Maior resistência à seca (turgidez).",
        "Melhor nutrição de P (sem arroxeamento).",
        "Agregação do solo (glomalina)."
      ],
      "traducaoParaManejo": "É a 'internet' do solo. Conecta a planta a recursos distantes que ela não alcançaria sozinha.",
      "compatibilidadePratica": {
        "misturaTanque": "Sensível a fungicidas. Preferir aplicação no sulco.",
        "observacoesManejo": "Precisa de planta viva para multiplicar (biotrófico obrigatório)."
      }
    },
    "doseInfo": {
      "range": "Propágulos infectivos",
      "justification": "Inoculação garante colonização precoce.",
      "critical": "Fungicidas sistêmicos podem abortar a simbiose."
    },
    "mechanisms": [
      { "t": "Absorção de P", "d": "Hifas finas entram em microporos." },
      { "t": "Glomalina", "d": "Cola que agrega partículas do solo." },
      { "t": "Água", "d": "Acesso a água em zonas distantes." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [10, 90, 0, 40, 40, 10, 0, 60], "label": "Perfil funcional" },
    "flow": [
      { "t": "Esporo", "s": "Germinação." },
      { "t": "Raiz", "s": "Simbiose." },
      { "t": "Hifas", "s": "Exploração." }
    ],
    "table": [
      { "c1": "Rhizophagus", "c2": "Soja/Milho", "c3": "Nutrição P", "c4": "Eficiência do adubo." },
      { "c1": "Glomus", "c2": "Café", "c3": "Estrutura Solo", "c4": "Qualidade de muda." }
    ],
    "caseStudy": {
      "title": "Eficiência de Fósforo",
      "desc": "Plantas micorrizadas absorveram 4x mais fósforo marcado (32P) do solo em comparação ao controle não inoculado.",
      "ref": "Smith & Read, 2008. Mycorrhizal Symbiosis.",
      "chartData": { "labels": ["P Absorvido (Controle)", "P Absorvido (FMA)"], "data": [100, 400] }
    }
  },
  "pnsb": {
    "name": "PNSB",
    "sub": "Bactérias fotossintéticas",
    "descShort": "Bactérias que formam biofilmes, degradam matéria orgânica e reduzem nitratos.",
    "descLong": "<strong>Rhodopseudomonas palustris</strong> melhora a estrutura do solo, fixa nitrogênio e reduz teores tóxicos de nitrato em folhosas (convertendo em biomassa proteica). Produz 5-ALA (antiestresse).",
    "image": "assets/colonia Rhodopseudomonas.png",
    "effectImages": [
      { "url": "assets/efeito Rhodopseudomonas.jpeg", "cap": "Biofilme Bacteriano: Coloração avermelhada indicando estabelecimento no substrato." },
      { "url": "assets/efeito Rhodopseudomonas2.jpeg", "cap": "Recuperação de Solo: Estruturação de agregados e vida microbiana." }
    ],
    "strains": ["Rhodopseudomonas palustris"],
    "colors": { "main": "#ef4444", "hex": "#ef4444" },
    "lab": { "temp": 28, "ph": 7.0, "conc": 7, "aia": 70, "psol": 10, "nfix": 40, "biocontrol": 70, "label": "Biofilme" },
    "tech": { "temp": "Variável", "media": "Resíduos Orgânicos", "ph": "7.0", "conc": "10⁷ UFC/mL" },
    "app": { "crops": "Hortaliças, Arroz", "soil": "Rico em M.O.", "env": "Luz/Umidade", "method": "Solo ou Foliar" },
    "extension": {
      "quandoFazMaisSentidoUsar": [
        "Recuperação de solos salinos ou degradados.",
        "Hortifruti com excesso de nitrato (limpeza).",
        "Sistemas alagados (arroz) ou com baixa oxigenação."
      ],
      "quandoGanhoTendeSerPequeno": [
        "Solos desérticos e pobres em matéria orgânica.",
        "Aplicação em pleno sol forte sem cobertura (UV mata).",
        "Expectativa de efeito biocida imediato."
      ],
      "oQueObservarNaLavoura": [
        "Melhoria na estrutura do solo (mais fofo).",
        "Redução da crosta salina na superfície.",
        "Hortaliças com folhas mais vigorosas."
      ],
      "traducaoParaManejo": "São as faxineiras e recicladoras. Transformam restos de adubo e sal em comida boa para a planta.",
      "compatibilidadePratica": {
        "misturaTanque": "Compatível com melaço. Evitar cloro e antibióticos.",
        "observacoesManejo": "Aplicar via drench ou fertirrigação."
      }
    },
    "doseInfo": {
      "range": "10⁶ UFC/g",
      "justification": "Formação de biofilmes persistentes.",
      "critical": "Sobrevivência depende de luz ou carbono orgânico."
    },
    "mechanisms": [
      { "t": "5-ALA", "d": "Produção de 5-ALA (precursor de clorofila) que aumenta eficiência fotossintética sob salinidade." },
      { "t": "Degradação", "d": "Reciclagem de matéria orgânica." }
    ],
    "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [80, 10, 40, 50, 70, 70, 40, 65], "label": "Perfil funcional PGPR" },
    "flow": [
      { "t": "Luz/Carbono", "s": "Energia." },
      { "t": "PNSB", "s": "Biofilme." },
      { "t": "Efeito", "s": "Vida." }
    ],
    "table": [
      { "c1": "R. palustris", "c2": "Hortaliças", "c3": "Redução Nitrato", "c4": "Qualidade." }
    ],
    "caseStudy": {
      "title": "Promoção de Crescimento via Produção de 5-ALA",
      "desc": "A aplicação de Rhodopseudomonas palustris aumentou a produção endógena de ácido 5-aminolevulínico (5-ALA) nas plantas, resultando em maior acúmulo de clorofila e tolerância a estresses.",
      "ref": "Watanabe, K., et al. (2017). Plant and Soil, 419(1-2), 175-187.",
      "chartData": { "labels": ["Controle", "PNSB (5-ALA)"], "data": [100, 130] }
    }
  }
};