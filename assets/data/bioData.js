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
      "lab": { "temp": 30, "ph": 7.5, "conc": 9, "aia": 40, "psol": 85, "nfix": 20, "biocontrol": 95, "label": "Estável" },
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
      "lab": { "temp": 29, "ph": 6.5, "conc": 7.5, "aia": 85, "psol": 50, "nfix": 60, "biocontrol": 30, "label": "Enraizador" },
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
        "title": "Coinoculação em Milho",
        "desc": "A associação de Azospirillum com Bradyrhizobium incrementou a biomassa radicular em 30%.",
        "ref": "Hungria et al., 2010. Biology and Fertility of Soils.",
        "chartData": { "labels": ["Controle", "Azospirillum", "Coinoculação"], "data": [100, 115, 130] }
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
      "strains": ["Bradyrhizobium (SEMIA 5079/5080)", "Rhizobium leguminosarum"],
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
          "misturaTanque": "Incompatível com metais pesados e fungicidas tóxicos sem secagem.",
          "observacoesManejo": "Calor mata a bactéria. Semear imediatamente após inoculação."
        }
      },
      "doseInfo": {
        "range": "10⁹ - 10¹⁰ UFC/mL",
        "justification": "Dose massiva para garantir nodulação primária na raiz principal.",
        "critical": "Compatibilidade com químicos é crítica. Morrem rapidamente com fungicidas."
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
        "descLong": "<em>Methylobacterium symbioticum</em> representa uma nova fronteira: a inoculação foliar. Estas bactérias utilizam metanol (subproduto do crescimento vegetal) como fonte de carbono, fixam nitrogênio atmosférico e produzem fitohormônios que aumentam a eficiência fotossintética.",
        "image": "assets/colonia Methylobacterium.jpeg",
        "effectImages": [
            {"url": "assets/efeito Methylobacterium.jpeg", "cap": "Efeito \"Stay-green\": Retenção de clorofila em folhas sob estresse."},
            {"url": "assets/efeito Methylobacterium2.jpeg", "cap": "Vigor Foliar: Planta tratada apresenta maior área foliar e sanidade."}
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
            "critical": "A aplicação deve garantir cobertura foliar. Pigmentos rosas conferem proteção natural contra radiação UV."
        },
        "mechanisms": [
            {"t": "Fixação de N Foliar", "d": "Fornecimento direto de nitrogênio à folha."},
            {"t": "Consumo de Metanol", "d": "Metanol é tóxico para a planta; sua remoção aumenta o vigor."},
            {"t": "Citocininas", "d": "Retarda a senescência foliar (efeito Stay-green)."}
        ],
        "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [60, 30, 20, 40, 20, 80, 80, 50], "label": "Perfil funcional PGPR" },
        "flow": [
            {"t": "Folha", "s": "Exsudação de Metanol."},
            {"t": "Methylobacterium", "s": "Consumo de Metanol + FBN."},
            {"t": "Efeito", "s": "Mais Fotossíntese e N."}
        ],
        "table": [
            {"c1": "M. symbioticum", "c2": "Soja/Milho", "c3": "FBN Foliar + Citocininas", "c4": "Maior enchimento de grãos e sanidade foliar."}
        ],
        "caseStudy": {
            "title": "Bioestimulação Foliar em Soja",
            "desc": "A aplicação foliar de M. symbioticum aumentou a retenção de clorofila e o peso de grãos em condições de estresse térmico.",
            "ref": "Y. Mecellani et al., 2023. Agronomy Journal.",
            "chartData": { "labels": ["Controle", "Methylo T1", "Methylo T2"], "data": [3200, 3450, 3580] }
        }
    },
    "bioinseticidas": {
        "name": "Bioinseticidas",
        "sub": "Controle Biológico Avançado",
        "descShort": "Bactérias e fungos entomopatogênicos para controle de pragas difíceis como lagartas, trips e percevejos.",
        "descLong": "A nova geração de bioinseticidas inclui bactérias como <em>Chromobacterium subtsugae</em> e <em>Saccharopolyspora spinosa</em>, além dos fungos clássicos. Oferecem controle específico sem resíduos químicos, atuando por ingestão ou contato.",
        "image": "assets/colonia Beauveria.jpeg",
        "effectImages": [
            {"url": "assets/efeito Bauveria.jpeg", "cap": "Esporulação fúngica sobre o exoesqueleto da lagarta (mumificação)."},
            {"url": "assets/efeito Bauveria2.jpeg", "cap": "Controle Populacional: Colônia de fungos eliminando praga alvo."}
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
            {"t": "Infecção Cuticular", "d": "Fungos penetram o exoesqueleto do inseto."},
            {"t": "Toxinas Orais", "d": "Bactérias produzem proteínas tóxicas após ingestão."},
            {"t": "Ação Neural", "d": "Espinocinas (Saccharopolyspora) afetam sistema nervoso."}
        ],
        "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [0, 0, 0, 0, 100, 0, 0, 85], "label": "Perfil funcional PGPR" },
        "flow": [
            {"t": "Praga Alvo", "s": "Lagarta/Percevejo."},
            {"t": "Aplicação", "s": "Contato ou Ingestão."},
            {"t": "Ação", "s": "Paralisia ou Infecção."},
            {"t": "Resultado", "s": "Morte da praga."}
        ],
        "table": [
            {"c1": "Chromobacterium subtsugae", "c2": "Milho/Soja", "c3": "Múltipla ação (Repelência/Toxicidade)", "c4": "Controle de lagartas e percevejos."},
            {"c1": "Saccharopolyspora spinosa", "c2": "Hortifruti", "c3": "Neurotoxina natural", "c4": "Controle de trips e minadores."},
            {"c1": "Beauveria/Metarhizium", "c2": "Geral", "c3": "Colonização fúngica", "c4": "Controle de cigarrinhas e mosca-branca."}
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
            {"url": "assets/efeito Pseudomonas.jpeg", "cap": "Colonização concêntrica: Raiz em corte transversal com Pseudomonas na superfície radicular."},
            {"url": "assets/efeito Pseudomonas2.jpeg", "cap": "Efeito Sideróforo: Planta tratada verde vs controle clorótico (falta de Fe)."}
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
            {"t": "Sideróforos", "d": "Vantagem competitiva por Ferro."},
            {"t": "Solubilização de P", "d": "Liberação de fósforo fixado."},
            {"t": "Biofilmes", "d": "Colonização agressiva da raiz."}
        ],
        "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [50, 95, 95, 80, 80, 40, 10, 90], "label": "Perfil funcional PGPR" },
        "flow": [
            {"t": "Rizoplano", "s": "Exsudatos."},
            {"t": "Pseudomonas", "s": "Colonização Rápida."},
            {"t": "Mecanismo", "s": "Sideróforos (Fe)."},
            {"t": "Efeito", "s": "Sanidade e P."}
        ],
        "table": [
            {"c1": "P. fluorescens", "c2": "Trigo/Soja", "c3": "Sideróforos + Solub. P", "c4": "Promoção de saúde e vigor."},
            {"c1": "P. putida", "c2": "Leguminosas", "c3": "Helper de Nodulação", "c4": "Aumenta eficiência de rizóbios."}
        ],
        "caseStudy": {
            "title": "Supressão de Fusarium em Trigo",
            "desc": "O tratamento de sementes com Pseudomonas fluorescens reduziu a incidência de podridão radicular em 48% em solos infestados.",
            "ref": "R. Mendes et al., 2013. Science (Adaptado).",
            "chartData": { "labels": ["Controle (Doença)", "Tratado (Doença)"], "data": [80, 41] }
        }
    },
    "fungos": {
        "name": "Fungos PGP",
        "sub": "Trichoderma e micorrizas",
        "descShort": "Fungos benéficos que ampliam a zona de absorção radicular e combatem patógenos de solo.",
        "descLong": "<strong>Trichoderma harzianum</strong> protege contra patógenos de solo (Pythium, Fusarium), enquanto micorrizas expandem a absorção. Exigem umidade para estabelecimento.",
        "image": "assets/colonia trichoderma.jpeg",
        "effectImages": [
            {"url": "assets/efeito Trichoderma.jpeg", "cap": "Hiperparasitismo: Hifas de Trichoderma estrangulando fungo patogênico."},
            {"url": "assets/efeito Trichoderma2.png", "cap": "Promoção de Crescimento: Raízes protegidas e livres de necrose."}
        ],
        "strains": ["Trichoderma harzianum", "Micorrizas Arbusculares"],
        "colors": { "main": "#eab308", "hex": "#eab308" },
        "lab": { "temp": 25, "ph": 6.0, "conc": 6, "aia": 20, "psol": 60, "nfix": 0, "biocontrol": 90, "label": "Fúngico" },
        "tech": { "temp": "20-30°C", "media": "PDA", "ph": "4.0-7.0", "conc": "Esporos/g" },
        "app": { "crops": "Hortaliças, Soja, Milho", "soil": "Úmido", "env": "Alta Umidade", "method": "Semente ou Drench" },
        "extension": {
          "quandoFazMaisSentidoUsar": [
            "Áreas com histórico de tombamento (damping-off).",
            "Culturas perenes ou de ciclo longo.",
            "Solos com matéria orgânica (comida para o Trichoderma)."
          ],
          "quandoGanhoTendeSerPequeno": [
            "Solos excessivamente revolvidos (grade destrói hifas).",
            "Seca extrema logo após o plantio.",
            "Uso intenso de fungicidas químicos no sulco."
          ],
          "oQueObservarNaLavoura": [
            "Menos 'falhas' na linha de plantio (stand uniforme).",
            "Raízes mais resistentes ao arrancquio."
          ],
          "traducaoParaManejo": "O Trichoderma é o cão de guarda da raiz: ataca outros fungos. A Micorriza é a 'extensão' da raiz, buscando água longe.",
          "compatibilidadePratica": {
            "misturaTanque": "PROIBIDO misturar com fungicidas químicos.",
            "observacoesManejo": "Manter em local fresco. Aplicar em solo com umidade."
          }
        },
        "doseInfo": {
            "range": "10⁶ - 10⁸ Esporos/g",
            "justification": "Estabelecimento de micélio protetor.",
            "critical": "Umidade do solo é o fator limitante. Não aplicar em solo seco."
        },
        "mechanisms": [
            {"t": "Micoparasitismo", "d": "Trichoderma ataca fungos patogênicos."},
            {"t": "Hifas", "d": "Micorrizas buscam água e P longe da raiz."}
        ],
        "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [20, 60, 10, 30, 90, 20, 0, 95], "label": "Perfil funcional PGPR" },
        "flow": [
            {"t": "Solo", "s": "Esporos."},
            {"t": "Raiz", "s": "Colonização."},
            {"t": "Efeito", "s": "Proteção e Nutrição."}
        ],
        "table": [
            {"c1": "Trichoderma harzianum", "c2": "Diversas", "c3": "Biocontrole Solo", "c4": "Controle de tombamento (Damping-off)."},
            {"c1": "Micorrizas", "c2": "Milho/Trigo", "c3": "Absorção P", "c4": "Resistência à seca."}
        ],
        "caseStudy": {
            "title": "Promoção de Crescimento em Hortaliças",
            "desc": "A inoculação com Trichoderma harzianum resultou em um aumento de 25% no peso fresco de alface em sistema hidropônico.",
            "ref": "G. Harman et al., 2004. Nature Reviews.",
            "chartData": { "labels": ["Controle", "Trichoderma"], "data": [100, 125] }
        }
    },
    "pnsb": {
        "name": "PNSB",
        "sub": "Bactérias fotossintéticas",
        "descShort": "Bactérias que formam biofilmes, degradam matéria orgânica e reduzem nitratos.",
        "descLong": "<strong>Rhodopseudomonas palustris</strong> melhora a estrutura do solo, fixa nitrogênio e reduz teores tóxicos de nitrato em folhosas. Produz 5-ALA (antiestresse).",
        "image": "assets/colonia Rhodopseudomonas.png",
        "effectImages": [
            {"url": "assets/efeito Rhodopseudomonas.jpeg", "cap": "Biofilme Bacteriano: Coloração avermelhada indicando estabelecimento no substrato."},
            {"url": "assets/efeito Rhodopseudomonas2.jpeg", "cap": "Recuperação de Solo: Estruturação de agregados e vida microbiana."}
        ],
        "strains": ["Rhodopseudomonas palustris"],
        "colors": { "main": "#ef4444", "hex": "#ef4444" },
        "lab": { "temp": 28, "ph": 7.0, "conc": 6, "aia": 100, "psol": 10, "nfix": 40, "biocontrol": 70, "label": "Biofilme" },
        "tech": { "temp": "Variável", "media": "Resíduos Orgânicos", "ph": "7.0", "conc": "10⁶ UFC/g" },
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
            {"t": "5-ALA", "d": "Resistência a frio/sal."},
            {"t": "Degradação", "d": "Reciclagem de matéria orgânica."}
        ],
        "chartData": { "labels": ["AIA", "Solubilização de P", "Sideróforos", "ACC desaminase", "Biocontrole", "GAs", "Fixação de N", "ISR"], "data": [100, 10, 40, 50, 70, 70, 40, 65], "label": "Perfil funcional PGPR" },
        "flow": [
            {"t": "Luz/Carbono", "s": "Energia."},
            {"t": "PNSB", "s": "Biofilme."},
            {"t": "Efeito", "s": "Vida."}
        ],
        "table": [
            {"c1": "R. palustris", "c2": "Hortaliças", "c3": "Redução Nitrato", "c4": "Qualidade."}
        ],
        "caseStudy": {
            "title": "Recuperação de Solos Salinos",
            "desc": "A aplicação de PNSB resultou na redução da condutividade elétrica e aumento significativo de matéria orgânica em solo degradado.",
            "ref": "K. Lee et al., 2021. Applied Soil Ecology.",
            "chartData": { "labels": ["Salinidade Inicial", "Salinidade Final (PNSB)"], "data": [8.5, 4.2] }
        }
    }
};