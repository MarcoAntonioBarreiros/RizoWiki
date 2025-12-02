window.solverData = [
    {
        "id": "nitrogen",
        "title": "Reduzir Adubação Nitrogenada",
        "subtitle": "Fixação Biológica (FBN)",
        "icon": "fa-leaf",
        "color": "green",
        "gradient": "from-green-600 to-emerald-800",
        "mech": {
            "title": "Substituição via FBN",
            "desc": "Bactérias diazotróficas convertem N₂ atmosférico em amônia. Em leguminosas, permite a substituição total do N mineral. Em gramíneas, aumenta a eficiência do uso de N e permite redução parcial da adubação.",
            "molecule": "Nitrogenase / Amônia",
            "action": "Fixação Biológica"
        },
        "microbes": [
            {
                "name": "Bradyrhizobium japonicum",
                "strain": "SEMIA 5079",
                "specs": { "type": "Fixador N", "temp": "Sulco" },
                "desc": "Especialista em fixação biológica de nitrogênio (FBN) para leguminosas, formando nódulos eficientes."
            },
            {
                "name": "Azospirillum brasilense",
                "strain": "Ab-V5",
                "specs": { "type": "Associativo", "temp": "Sulco/Foliar" },
                "desc": "Promove crescimento radicular e realiza FBN associativa em gramíneas (milho/trigo) e co-inoculação em soja."
            },
            {
                "name": "Pseudomonas fluorescens",
                "strain": "Rizobactéria",
                "specs": { "type": "Solubilizador", "temp": "Solo" },
                "desc": "Solubiliza fósforo e produz sideróforos, atuando em sinergia com fixadores de nitrogênio."
            },
            {
                "name": "Methylobacterium",
                "strain": "symbioticum",
                "specs": { "type": "Foliar", "temp": "V4-V8" },
                "desc": "Fixação facultativa nas folhas e modulação de citocininas para manter o 'stay-green'."
            },
            {
                "name": "Rhodopseudomonas",
                "strain": "palustris",
                "specs": { "type": "Fotossintética", "temp": "Solo" },
                "desc": "Fixa N mesmo em condições de alagamento ou compactação (anaerobiose)."
            }
        ],
        "protocolSummary": [
            "1. Verificar validade e concentração (>10^9 UFC/mL).",
            "2. Definir dose: Soja (1.2 mi células/sem), Milho (100-200mL/ha).",
            "3. Aplicar no sulco ou tratamento de sementes à sombra.",
            "4. Compatibilidade: Não misturar com micronutrientes metálicos concentrados.",
            "5. Avaliar: Contar nódulos (soja) ou biomassa de raiz (milho) em V4."
        ],
        "recs": [
            { "type": "critical", "title": "Fotossensibilidade", "text": "Azospirillum é sensível ao ressecamento e luz solar. Mantenha sementes tratadas à sombra e plante rapidamente." },
            { "type": "strategy", "title": "Co-Inoculação", "text": "A soma de FBN + Estímulo Radicular supera o uso isolado." }
        ]
    },
    {
        "id": "fosforo",
        "title": "Aproveitar Fósforo Travado",
        "subtitle": "Solubilização",
        "icon": "fa-lock",
        "color": "emerald",
        "gradient": "from-emerald-600 to-teal-800",
        "mech": {
            "title": "Mobilização de P Legado",
            "desc": "Bactérias solubilizadoras acidificam a rizosfera e liberam enzimas (fosfatases) que destravam o Fósforo fixado em cálcio, ferro ou alumínio.",
            "molecule": "Ácido Glucônico / Fosfatases",
            "action": "Solubilização"
        },
        "microbes": [
            {
                "name": "Bacillus (Priestia) megaterium",
                "strain": "CNPMS B119",
                "specs": { "type": "Solubilizador", "temp": "Solo" },
                "desc": "Alta produção de ácidos orgânicos. Ganhos maiores observados em solos de P baixo a médio."
            },
            {
                "name": "Bacillus subtilis",
                "strain": "CNPMS B2084",
                "specs": { "type": "Sinergia", "temp": "Solo" },
                "desc": "Forma biofilme que amplia a área de contato raiz-solo. Em consórcio com B119, maximiza a eficiência."
            },
            {
                "name": "Pseudomonas fluorescens",
                "strain": "Rizobactéria",
                "specs": { "type": "Mineralizador", "temp": "Solo" },
                "desc": "Especialista em mineralizar Fósforo Orgânico (fitatos) via enzimas fitases."
            },
            {
                "name": "Glomus spp.",
                "strain": "Micorrizas",
                "specs": { "type": "Fungo", "temp": "Raiz" },
                "desc": "Hifas finas exploram o solo além da zona de esgotamento da raiz, buscando P distante."
            }
        ],
        "protocolSummary": [
            "1. Escolher estirpes validadas para o tipo de solo (ácido vs alcalino).",
            "2. Dose: 100-150mL/ha no sulco de plantio.",
            "3. Momento: Aplicar junto com o fertilizante fosfatado ou na semente.",
            "4. Compatibilidade: Variável. Bactérias (Bacillus/Pseudomonas) têm boa tolerância. No entanto, componentes fúngicos (Micorrizas) são sensíveis a muitos fungicidas (ex: triazóis, estrobilurinas); verificar tabelas.",
            "5. Avaliar: Análise foliar de P e desenvolvimento radicular."
        ],
        "recs": [
            { "type": "critical", "title": "Umidade", "text": "A difusão de ácidos exige água. Não aplicar no pó." },
            { "type": "strategy", "title": "Ativação", "text": "Misturar com Fosfato de Rocha aumenta a eficiência do adubo." }
        ]
    },
    {
        "id": "seca",
        "title": "Aumentar Tolerância à Seca",
        "subtitle": "Estresse Hídrico",
        "icon": "fa-sun",
        "color": "orange",
        "gradient": "from-orange-500 to-red-700",
        "mech": {
            "title": "Osmoproteção & Raízes Profundas",
            "desc": "Indução de raízes profundas (AIA) e produção de osmoprotetores (trehalose, prolina) que mantêm a turgidez celular.",
            "molecule": "Trehalose / Prolina",
            "action": "Mitigação de Estresse"
        },
        "microbes": [
            {
                "name": "Priestia aryabhattai",
                "strain": "Cepa Sideral",
                "specs": { "type": "Resistência", "temp": "Solo/Foliar" },
                "desc": "Induz genes de resposta à seca na planta e protege membranas celulares."
            },
            {
                "name": "Bacillus licheniformis",
                "strain": "Biofilme+",
                "specs": { "type": "Retenção", "temp": "Solo" },
                "desc": "Produz EPS (gelatina) que retém umidade ao redor da raiz (rizosfera)."
            },
            {
                "name": "Rhodopseudomonas",
                "strain": "palustris",
                "specs": { "type": "Antioxidante", "temp": "Solo" },
                "desc": "Produz 5-ALA, combatendo o estresse oxidativo (radicais livres) gerado pela seca."
            },
            {
                "name": "Azospirillum brasilense",
                "strain": "Ab-V5 / Ab-V6",
                "specs": { "type": "Bactéria", "temp": "Semente/Sulco" },
                "desc": "Aumenta o volume radicular, permitindo acesso a água em camadas mais profundas do solo."
            },
            {
                "name": "Glomus spp.",
                "strain": "Micorrizas",
                "specs": { "type": "Absorção", "temp": "Raiz" },
                "desc": "Acessa água em microporos onde a raiz não entra, mantendo a turgidez por mais tempo."
            }
        ],
        "protocolSummary": [
            "1. Identificar áreas de risco de veranico.",
            "2. Dose: Padrão (100mL/ha).",
            "3. Momento: Preventivo! Aplicar NO INÍCIO do ciclo ou antes do estresse.",
            "4. Compatibilidade: Alta.",
            "5. Avaliar: Manutenção de turgor e recuperação pós-chuva."
        ],
        "recs": [
            { "type": "critical", "title": "Timing", "text": "Não recupera planta morta. Aplicação deve ser preventiva." },
            { "type": "app", "title": "Resgate", "text": "Via foliar pode ajudar se o estresse já iniciou (efeito paliativo)." }
        ]
    },
    {
        "id": "doencas",
        "title": "Reduzir Doenças de Raiz",
        "subtitle": "Biocontrole",
        "icon": "fa-shield-alt",
        "color": "red",
        "gradient": "from-rose-600 to-red-900",
        "mech": {
            "title": "Competição & Antibiose",
            "desc": "Ocupação do espaço (nicho) antes do patógeno e produção de metabólitos que inibem ou matam fungos de solo (Fusarium, Rhizoctonia).",
            "molecule": "Iturinas / Sideróforos",
            "action": "Proteção Radicular"
        },
        "microbes": [
            {
                "name": "Trichoderma harzianum",
                "strain": "T-22 / 1306",
                "specs": { "type": "Fungo", "temp": "Solo" },
                "desc": "Crescimento rápido e agressivo contra escleródios e hifas de patógenos."
            },
            {
                "name": "Bacillus velezensis",
                "strain": "Múltiplos",
                "specs": { "type": "Bactéria", "temp": "Solo" },
                "desc": "Produz antibióticos potentes e coloniza a raiz formando um escudo biológico."
            },
            {
                "name": "Pseudomonas putida",
                "strain": "Sideróforo+",
                "specs": { "type": "Competição", "temp": "Solo" },
                "desc": "Produz sideróforos que quelam ferro, limitando a disponibilidade para patógenos (competição) e induz resistência sistêmica."
            }
        ],
        "protocolSummary": [
            "1. Monitorar histórico de doenças da área.",
            "2. Dose: Aumentar em 50% em áreas de alta pressão.",
            "3. Momento: Tratamento de sementes ou sulco (chegar antes do patógeno).",
            "4. Compatibilidade: Alta sensibilidade de Trichoderma a fungicidas. Evitar mistura direta no tanque sem validação prévia; priorizar aplicação separada ou consultar tabelas.",
            "5. Avaliar: Stand de plantas e sanidade de raízes."
        ],
        "recs": [
            { "type": "critical", "title": "Incompatibilidade", "text": "Trichoderma é muito sensível a químicos. Aplique separado." },
            { "type": "app", "title": "Armazenamento", "text": "Manter refrigerado ou em local fresco. Calor mata o fungo." }
        ]
    },
    {
        "id": "vigor",
        "title": "Aumentar Vigor de Arranque",
        "subtitle": "Enraizamento",
        "icon": "fa-seedling",
        "color": "purple",
        "gradient": "from-purple-600 to-indigo-900",
        "mech": {
            "title": "Estímulo Hormonal (AIA)",
            "desc": "Produção de fitohormônios (Auxinas) que estimulam a divisão celular e o crescimento explosivo de raízes logo após a germinação.",
            "molecule": "Ácido Indol-Acético",
            "action": "Enraizamento Rápido"
        },
        "microbes": [
            {
                "name": "Azospirillum brasilense",
                "strain": "Ab-V5 / Ab-V6",
                "specs": { "type": "Hormonal", "temp": "Semente/Sulco" },
                "desc": "O 'motor de arranque'. Maximiza a absorção de água e nutrientes nos primeiros dias."
            },
            {
                "name": "Trichoderma harzianum",
                "strain": "T-22",
                "specs": { "type": "Solubilizador", "temp": "Sulco" },
                "desc": "Além de proteger, solubiliza nutrientes e produz auxinas que aceleram a germinação."
            },
            {
                "name": "Bacillus subtilis",
                "strain": "Promoção",
                "specs": { "type": "Biofilme", "temp": "Semente" },
                "desc": "Protege a plântula contra estresses iniciais e estimula o vigor."
            }
        ],
        "protocolSummary": [
            "1. Foco em sementes de baixo vigor ou plantio profundo.",
            "2. Dose: Padrão de bula.",
            "3. Momento: Tratamento de Sementes (TS) é o mais eficaz.",
            "4. Compatibilidade: Boa, mas atenção ao pH da calda.",
            "5. Avaliar: Velocidade de emergência e uniformidade do stand."
        ],
        "recs": [
            { "type": "critical", "title": "Luz UV", "text": "Proteger sementes tratadas do sol." },
            { "type": "strategy", "title": "Combo", "text": "Associar com micronutrientes (Co, Mo) no TS é essencial para a FBN, mas cuidado com a salinidade/pH." }
        ]
    },
    {
        "id": "pragas",
        "title": "Controle de Pragas",
        "subtitle": "Bio-Inseticidas",
        "icon": "fa-bug",
        "color": "rose",
        "gradient": "from-rose-500 to-pink-800",
        "mech": {
            "title": "Infecção & Intoxicação",
            "desc": "Controle biológico via fungos que penetram a cutícula (Beauveria) ou bactérias que causam rejeição alimentar e morte (Chromobacterium/Bt).",
            "molecule": "Cristais Cry / Esporos",
            "action": "Morte de Insetos"
        },
        "microbes": [
            {
                "name": "Bacillus thuringiensis (Bt)",
                "strain": "Diversas (ex: kurstaki)",
                "specs": { "type": "Bactéria", "temp": "Foliar" },
                "desc": "Produz cristais de proteína (Cry) tóxicos para lagartas (Lepidoptera) após ingestão. Base do controle biológico moderno."
            },
            {
                "name": "Chromobacterium",
                "strain": "subtsugae",
                "specs": { "type": "Repelência", "temp": "Foliar" },
                "desc": "Causa rejeição alimentar e morte em percevejos e sugadores. Ótimo para ninfas."
            },
            {
                "name": "Beauveria bassiana",
                "strain": "IBCB 66",
                "specs": { "type": "Fungo", "temp": "Foliar" },
                "desc": "O esporo germina na casca do inseto e coloniza o interior (mumificação). Alvo: Broca/Cigarrinha."
            },
            {
                "name": "Saccharopolyspora spinosa",
                "strain": "Metabólitos",
                "specs": { "type": "Bactéria (Derivado)", "temp": "Foliar" },
                "desc": "Ação rápida (choque) contra lagartas e trips. (Nota: Utiliza-se o metabólito Spinosad, não a bactéria viva)."
            }
        ],
        "protocolSummary": [
            "1. Monitoramento constante da praga (nível de dano econômico).",
            "2. Dose: Seguir bula, geralmente alta concentração de esporos.",
            "3. Momento: Aplicar à noite ou dias nublados (Umidade > 70% é vital para fungos).",
            "4. Compatibilidade: pH da calda entre 5.5-7.0. Evitar fungicidas.",
            "5. Avaliar: Redução da população e presença de insetos mortos/infectados."
        ],
        "recs": [
            { "type": "critical", "title": "Umidade", "text": "Beauveria exige umidade alta para germinar. Sem água, não funciona." },
            { "type": "app", "title": "Tecnologia", "text": "Use bicos de cone vazio e alta pressão para cobertura total." }
        ]
    },
    {
        "id": "compactacao",
        "title": "Recuperação de Solo Compactado",
        "subtitle": "Estrutura Física",
        "icon": "fa-layer-group",
        "color": "amber",
        "gradient": "from-amber-600 to-orange-800",
        "mech": {
            "title": "Alívio de Estresse & Agregação",
            "desc": "Bactérias reduzem o etileno de estresse na raiz (ACC-Desaminase) e produzem 'colas' biológicas (EPS/Glomalina) que reestruturam o solo.",
            "molecule": "ACC Desaminase / Glomalina",
            "action": "Reestruturação"
        },
        "microbes": [
            {
                "name": "Priestia aryabhattai",
                "strain": "Cepa UFV-10",
                "specs": { "type": "Enzimática", "temp": "Solo" },
                "desc": "Produz ACC-Desaminase, que 'engana' a planta para crescer mesmo sob pressão física."
            },
            {
                "name": "Rhodopseudomonas",
                "strain": "palustris",
                "specs": { "type": "Biofilme", "temp": "Solo" },
                "desc": "Produz grandes quantidades de EPS que atuam como cimento, agregando partículas do solo."
            },
            {
                "name": "Glomus spp.",
                "strain": "Micorrizas",
                "specs": { "type": "Físico", "temp": "Raiz" },
                "desc": "A glomalina produzida ajuda a estabilizar agregados do solo a longo prazo."
            },
            {
                "name": "Azospirillum brasilense",
                "strain": "Ab-V5 / Ab-V6",
                "specs": { "type": "Arquitetura", "temp": "Semente/Sulco" },
                "desc": "Estimula raízes finas que ajudam a explorar poros menores em solos compactados."
            }
        ],
        "protocolSummary": [
            "1. Diagnóstico físico (penetrotan) para confirmar compactação.",
            "2. Dose: Dobrar a dose de Priestia em áreas críticas.",
            "3. Momento: Sulco de plantio (contato imediato com a raiz).",
            "4. Compatibilidade: Alta. Funciona bem com biológicos de FBN.",
            "5. Avaliar: Desenvolvimento radicular em profundidade."
        ],
        "recs": [
            { "type": "critical", "title": "Carbono", "text": "Micorrizas e PNSB precisam de cobertura (palhada) para funcionar bem." },
            { "type": "strategy", "title": "Manejo Integrado", "text": "O biológico ajuda a raiz a romper, mas rotação de culturas é essencial." }
        ]
    }
];
