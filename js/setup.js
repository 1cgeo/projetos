
const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 6,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 8,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    }
]

const INIT_ZOOM = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

var PROJECTS = {
    'plano-desenvolvimento-2023': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre 2023',
        executed: false,
        description: `O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Anexo E - Programa de Difusão de Produtos e Serviços de Geoinformação, do PDDMT.`,
        lotes: [
            {
                name: 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                subtitle: 'Carta Topográfica 1:100.000 do PR - PDDM 2022',
                description: `Construção de 30 cartas topográficas na escala 1:100.000 visando atender o exercício de adestramento em Jogo de Guerra do C Av Ex na região do PR.`,
                zoom: [
                    [-54.00995, -25.50903],
                    [-50.99005, -22.99097]
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr-fill',
                        'source': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr-border',
                        'source': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr-text',
                        'source': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                subtitle: 'Carta Ortoimagem 1:50.000 no RS',
                description: `Construção de 95 cartas ortoimagem na escala 1:50.000 visando atender o planejamento de operações para o CMS.`,
                zoom: [
                    [-54.75999, -26.00903], // southwestern corner of the bounds
                    [-52.49001, -22.49097] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs-fill',
                        'source': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs-border',
                        'source': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs-text',
                        'source': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                subtitle: 'Carta Topográfica 1:50.000 do PR',
                description: `Construção de 34 cartas topográficas na escala 1:50.000 visando atender solicitação do CMS na região do PR.`,
                zoom: [
                    [-54.01012, -27.50902], // southwestern corner of the bounds
                    [-52.48988, -25.99097] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr-fill',
                        'source': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr-border',
                        'source': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr-text',
                        'source': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs',
                subtitle: 'Carta Topográfica 1:50.000 do RS',
                description: `Construção de 95 cartas topográficas na escala 1:50.000 visando atender solicitação do CMS na região do RS.`,
                zoom: [
                    [-57.76047, -31.00902], // southwestern corner of the bounds
                    [-52.98953, -29.49098] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs-fill',
                        'source': 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs-border',
                        'source': 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs-text',
                        'source': 'pddmt-2023-sub-meta-b2-carta-orto-50k-rs',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },   
    'mapeamento-interesse-da-forca-2023': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre 2022',
        executed: false,
        description: `O objetivo do presente projeto consiste na elaboração de cartas topográfica em escalas
        entre 1:25.000 e 1:250.000 de áreas de interesse da Força Terrestre pelo território nacional. A Área de
        Suprimento Cartográfico (ASC) do 1º Centro de Geoinformação (1º CGEO) corresponde à área de
        responsabilidade do Comando Militar do Sul (CMS), abrangendo os estados do Rio Grande do Sul, Santa Catarina
        e Paraná. Dessa forma, o 1º CGEO será responsável por executar esse projeto em sua respectiva área de
        responsabilidade.`,
        lotes: [
            {
                name: 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                subtitle: 'Carta Topográfica 1:25.000 de Curitiba',
                description: `Construção de 06 cartas topográficas na escala 1:25.000 visando atender a atualização das capitais do ASC.`,
                zoom: [
                    [-49.38496, -25.63403], // southwestern corner of the bounds
                    [-49.11504, -25.24097] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba-fill',
                        'source': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba-border',
                        'source': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba-text',
                        'source': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                subtitle: 'Carta Topográfica 1:25.000 de Alegrete',
                description: `Construção de 03 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.`,
                zoom: [
                    [-55.88536, -30.00902], // southwestern corner of the bounds
                    [-55.61464, -29.74098] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete-fill',
                        'source': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete-border',
                        'source': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete-text',
                        'source': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                subtitle: 'Carta Topográfica 1:25.000 de Santana do Livramento',
                description: `Construção de 04 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.`,
                zoom: [
                    [-55.63547, -31.00902], // southwestern corner of the bounds
                    [-55.36453, -30.74098] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento-fill',
                        'source': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento-border',
                        'source': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento-text',
                        'source': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                subtitle: 'Carta Topográfica 1:25.000 de Quaraí',
                description: `Construção de 03 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.`,
                zoom: [
                    [-56.51042, -30.50902], // southwestern corner of the bounds
                    [-56.36458, -30.24098] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai-fill',
                        'source': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai-border',
                        'source': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai-text',
                        'source': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                subtitle: 'Carta Topográfica 1:25.000 do Mato Grosso do Sul',
                description: `Construção de 64 cartas topográficas militares na escala 1:25.000 na região da fronteira do Mato Grosso do Sul.`,
                zoom: [
                    [-58.00962, -21.00903],
                    [-56.99038, -19.99097]
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms-fill',
                        'source': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms-border',
                        'source': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms-text',
                        'source': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.34,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'plano-desenvolvimento-2022': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre 2022',
        executed: true,
        description: `O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Anexo E - Programa de Difusão de Produtos e Serviços de Geoinformação, do PDDMT.`,
        lotes: [
            {
                name: 'pddmt-2022-sub-meta-a-carta-orto-50k-pr',
                subtitle: 'Carta Ortoimagem 1:50.000 no PR',
                description: `Construção de 76 cartas ortoimagem na escala 1:50.000 visando atender o planejamento de operações no Lago de Itaipu para o CMS.`,
                zoom: [
                    [-54.94972409601194, -26.180512277006958], // southwestern corner of the bounds
                    [-52.30027568484421, -22.31939338230858] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pddmt-2022-sub-meta-a-carta-orto-50k-pr-fill',
                        'source': 'pddmt-2022-sub-meta-a-carta-orto-50k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-a-carta-orto-50k-pr-border',
                        'source': 'pddmt-2022-sub-meta-a-carta-orto-50k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-a-carta-orto-50k-pr-text',
                        'source': 'pddmt-2022-sub-meta-a-carta-orto-50k-pr',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs',
                subtitle: 'Carta Topográfica 1:100.000 do RS',
                description: `Construção de 52 cartas topográficas na escala 1:100.000 visando atender o exercício de adestramento em Jogo de Guerra do C Av Ex na região do RS.`,
                zoom: [
                    [-58.24018173756117, -32.47368087864978], // southwestern corner of the bounds
                    [-51.39593216041132, -28.148451192980446] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs-fill',
                        'source': 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs-border',
                        'source': 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs-text',
                        'source': 'pddmt-2022-sub-meta-b1-carta-topo-100k-rs',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },   
    'mapeamento-interesse-da-forca-2022': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre 2022',
        executed: true,
        description: `O objetivo do presente projeto consiste na elaboração de cartas topográfica em escalas
        entre 1:25.000 e 1:250.000 de áreas de interesse da Força Terrestre pelo território nacional. A Área de
        Suprimento Cartográfico (ASC) do 1º Centro de Geoinformação (1º CGEO) corresponde à área de
        responsabilidade do Comando Militar do Sul (CMS), abrangendo os estados do Rio Grande do Sul, Santa Catarina
        e Paraná. Dessa forma, o 1º CGEO será responsável por executar esse projeto em sua respectiva área de
        responsabilidade.`,
        lotes: [
            {
                name: 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis',
                subtitle: 'Carta Topográfica 1:25.000 de Florianópolis',
                description: `Construção de 09 cartas topográficas na escala 1:25.000 visando atender a atualização das capitais do ASC.`,
                zoom: [
                    [-48.82809677372772, -28.05547382461215], // southwestern corner of the bounds
                    [-48.046903497479974, -27.1945079332596] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis-fill',
                        'source': 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis-border',
                        'source': 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis-text',
                        'source': 'mapintfter-2022-sub-meta-a1-carta-topo-25k-florianopolis',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana',
                subtitle: 'Carta Topográfica 1:25.000 de Uruguaiana',
                description: `Construção de 02 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.`,
                zoom: [
                    [-57.33202394228996, -30.055420752836497], // southwestern corner of the bounds
                    [-56.79297573646644, -29.444567158256913] // northeastern corner of the bounds
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana-fill',
                        'source': 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana-border',
                        'source': 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana-text',
                        'source': 'mapintfter-2022-sub-meta-a2-carta-topo-25k-uruguaiana',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr',
                subtitle: 'Carta Topográfica 1:50.000 de Roraima',
                description: `Construção de 22 cartas topográficas na escala 1:50.000 na região da fronteira de Roraima.`,
                zoom: [
                    [
                        -63.93490169478686,
                        2.3460501179199724
                    ],
                    [
                        -58.48288600488843,
                        6.32638916302372
                    ]
                ],
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr-fill',
                        'source': 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr-border',
                        'source': 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr-text',
                        'source': 'mapintfter-2022-sub-meta-b-carta-topo-50k-rr',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.03,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc',
                subtitle: 'Generalização Carta Topográfica 1:100.000',
                description: `O objetivo do presente projeto consiste em realizar a Generalização Cartográfica
                na escala 1:100.000 de produtos na região de Santa Catarina e Rio
                Grande do Sul, para gerar 12 cartas topográficas na escala 1:100.000.`,
                zoom: [
                    [-52.209372285465335, -31.180376012441414],
                    [-49.79062798683473, -26.319489869099446]
                ],
                legend: [
                    1,
                    9,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc-fill',
                        'source': 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc-border',
                        'source': 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc-text',
                        'source': 'mapintfter-2022-sub-meta-c-carta-topo-100k-rs-sc',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 4.56,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'rio-grande-do-sul': {
        title: 'Projeto de Mapeamento do Estado do Rio Grande do Sul',
        executed: true,
        description: `O objetivo principal do projeto é a elaboração de 174 (cento e setenta e quatro) cartas
        topográficas na escala 1:25.000, e seus respectivos insumos geoespaciais (ortoimagens, modelos digitais
        de elevação e dados geoespaciais vetoriais), correspondentes à RF 1, compreendendo Porto Alegre,
        Região Metropolitana e municípios adjacentes, identificadas segundo a nomenclatura utilizada no Mapa-Índice
        (MI), de acordo com as Normas e Especificações Técnicas previstas para a Infraestrutura Nacional de
        Dados Espaciais (INDE).`,
        lotes: [
            {
                name: 'conv-rs-carta-topo-25k-rs',
                subtitle: '1:25.000',
                description: `A elaboração das cartas topográficas foi executada em 5 (cinco) lotes de produção
                cartográfica. Além da base cartográfica digital contínua foram entregues as imagens brutas, os modelos
                digitais de superfície, os modelos digitais do terreno e as ortoimagens de cada carta produzida, além da carta
                topográfica em formato matricial.`,
                zoom: [
                    [
                        -53.08078039276313,
                        -31.599938879777334
                    ],
                    [
                        -49.102955546684086,
                        -29.08630601676895
                    ]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'conv-rs-carta-topo-25k-rs-fill',
                        'source': 'conv-rs-carta-topo-25k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'conv-rs-carta-topo-25k-rs-border',
                        'source': 'conv-rs-carta-topo-25k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'conv-rs-carta-topo-25k-rs-text',
                        'source': 'conv-rs-carta-topo-25k-rs',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.89,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'conv-rs-carta-topo-50k-rs',
                subtitle: '1:50.000',
                description: `Produção de cartas topográficas 1:50.000 por processo de generalização`,
                zoom: [
                    [
                        -53.07164719034553,
                        -31.604238517208366
                    ],
                    [
                        -49.139097694440665,
                        -29.11968658972779
                    ]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'conv-rs-carta-topo-50k-rs-fill',
                        'source': 'conv-rs-carta-topo-50k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'conv-rs-carta-topo-50k-rs-border',
                        'source': 'conv-rs-carta-topo-50k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'conv-rs-carta-topo-50k-rs-text',
                        'source': 'conv-rs-carta-topo-50k-rs',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.89,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'santa-catarina': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre - Santa Catarina',
        executed: true,
        description: `Execução de mapeamento topográfico, totalizando 42 e 168 folhas nas escalas
        1:50.000 e 1:25.000, respectivamente, da Área de Suprimento Cartográfico (ASC) do 1º
        Centro de Geoinformação.`,
        lotes: [
            {
                name: 'santa-catarina-25k',
                subtitle: 'Escala 1:25.000',
                zoom: [
                    [
                        -52.5586923820878,
                        -28.700997713134676
                    ],
                    [
                        -48.54318247763669,
                        -26.090528839826753
                    ]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'santa-catarina-25k-fill',
                        'source': 'santa-catarina-25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'santa-catarina-25k-border',
                        'source': 'santa-catarina-25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'santa-catarina-25k-text',
                        'source': 'santa-catarina-25k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 9.01,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'santa-catarina-50k',
                subtitle: 'Escala 1:50.000',
                zoom: [
                    [-52.454258275555226, -28.680443365430413],
                    [-49.79574195439098, -26.069483443263103]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'santa-catarina-50k-fill',
                        'source': 'santa-catarina-50k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'santa-catarina-50k-border',
                        'source': 'santa-catarina-50k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'santa-catarina-50k-text',
                        'source': 'santa-catarina-50k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'uraricoera': {
        title: 'Exercício Uraricoera',
        executed: true,
        description: `O objetivo do presente projeto consiste na elaboração de 48 cartas topográficas na
        escala
        1:50.000
        distribuídas no estado de Roraima visando atender demanda do COTER relativa a
        realização de
        exercícios
        de Problemas Militares Simulados.`,
        lotes: [
            {
                name: 'uraricoera',
                subtitle: '',
                zoom: [
                    [-61.68024984824885, 1.3191292999480237],
                    [-60.31974985130867, 4.9308586451198915]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'uraricoera-fill',
                        'source': 'uraricoera',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'uraricoera-border',
                        'source': 'uraricoera',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'uraricoera-text',
                        'source': 'uraricoera',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.26,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'sisfron-17rcmec':{
        title: 'SISFRON - 17 RC Mec',
        executed: true,
        description: `Execução de mapeamento topográfico, nas escalas 1:25.000, 1:50.000 e 1:100.000, totalizando 59 cartas topográficas e seus dados
        vetoriais na região de fronteira do Paraná.`,
        lotes: [
            {
                name: 'sisfron-17rcmec-carta-topo-25k-pr',
                subtitle: `1:25.000`,
                description: `Execução de mapeamento topográfico na escalas 1:25.000 de 44 cartas topográficas e seus dados
                vetoriais na região de fronteira do Paraná.`,
                zoom: [
                    [-54.69732378130477, -24.6805561899923],
                    [-53.30267614980163, -22.81940267434254]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'sisfron-17rcmec-carta-topo-25k-pr-fill',
                        'source': 'sisfron-17rcmec-carta-topo-25k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec-carta-topo-25k-pr-border',
                        'source': 'sisfron-17rcmec-carta-topo-25k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec-carta-topo-25k-pr-text',
                        'source': 'sisfron-17rcmec-carta-topo-25k-pr',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.89,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'sisfron-17rcmec-carta-topo-50k-pr',
                subtitle: `1:50.000`,
                description: `Execução de mapeamento topográfico na escalas 1:50.000 de 12 cartas topográficas e seus dados
                vetoriais na região de fronteira do Paraná.`,
                zoom: [
                    [-54.69732378130477, -24.6805561899923],
                    [-53.30267614980163, -22.81940267434254]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'sisfron-17rcmec-carta-topo-50k-pr-fill',
                        'source': 'sisfron-17rcmec-carta-topo-50k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec-carta-topo-50k-pr-border',
                        'source': 'sisfron-17rcmec-carta-topo-50k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec-carta-topo-50k-pr-text',
                        'source': 'sisfron-17rcmec-carta-topo-50k-pr',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.89,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'sisfron-17rcmec-carta-topo-100k-pr',
                subtitle: `1:100.000`,
                description: `Execução de mapeamento topográfico na escalas 1:100.000 de 03 cartas topográficas e seus dados
                vetoriais na região de fronteira do Paraná.`,
                zoom: [
                    [-54.69732378130477, -24.6805561899923],
                    [-53.30267614980163, -22.81940267434254]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'sisfron-17rcmec-carta-topo-100k-pr-fill',
                        'source': 'sisfron-17rcmec-carta-topo-100k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec-carta-topo-100k-pr-border',
                        'source': 'sisfron-17rcmec-carta-topo-100k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec-carta-topo-100k-pr-text',
                        'source': 'sisfron-17rcmec-carta-topo-100k-pr',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.89,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'campo-instrucao': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre - Campos de Instrução',
        executed: true,
        description: `Execução de mapeamento topográfico, totalizando 24 folhas na escala 1:25.000,
        referentes à 5 (cinco) Campos de Instrução (CIB, CISM, CIR, CIMH e CIBSB) da Área de
        Suprimento Cartográfico (ASC) do 1º Centro de Geoinformação e que estão contidos na
        área de responsabilidade do Comando Militar do Sul.`,
        lotes: [
            {
                name: 'campo-instrucao-25k',
                subtitle: 'Escala 1:25.000',
                zoom: [
                    [
                        -56.18915089919898,
                        -31.213375905552738
                    ],
                    [
                        -48.04916183186424,
                        -25.982504667730154
                    ]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'campo-instrucao-25k-fill',
                        'source': 'campo-instrucao-25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'campo-instrucao-25k-border',
                        'source': 'campo-instrucao-25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'campo-instrucao-25k-text',
                        'source': 'campo-instrucao-25k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'campo-instrucao-50k',
                subtitle: 'Escala 1:50.000',
                zoom: [
                    [
                        -56.66123922488663,
                        -31.498994346004366
                    ],
                    [
                        -47.59830566095303,
                        -25.675197661624992
                    ]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'campo-instrucao-50k-fill',
                        'source': 'campo-instrucao-50k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'campo-instrucao-50k-border',
                        'source': 'campo-instrucao-50k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'campo-instrucao-50k-text',
                        'source': 'campo-instrucao-50k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 9.01,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'radiografia': {
        title: 'Projeto Radiografia da Amazônia',
        executed: true,
        description: `O 1º CGEO foi responsável pela aquisição dos dados geoespaciais vetoriais
        (altimetria,
        hidrografia e
        planimetria) e edição de cartas topográficas, com base nos dados geoespaciais de
        vegetação
        obtidos
        pelo
        2º CGEO (Brasília-DF), da área já imageada do projeto.`,
        lotes: [
            {
                name: 'radiografia-am',
                subtitle: '',
                zoom: [
                    [
                        -75.4914065314648,
                        -13.074583626077953
                    ],
                    [
                        -45.8294395582202,
                        8.500903062364785
                    ]
                ],
                legend: [3],
                styles: [
                    {
                        'id': 'radiografia-am-fill',
                        'source': 'radiografia-am',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'radiografia-am-border',
                        'source': 'radiografia-am',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'radiografia-am-text',
                        'source': 'radiografia-am',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    }
}