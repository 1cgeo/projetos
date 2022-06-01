
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
    'plano-desenvolvimento': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre 2022',
        executed: false,
        legend: [
            1,
            12,
            2,
            5,
            6,
            3
        ],
        description: `O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Anexo E - Programa de Difusão de Produtos e Serviços de Geoinformação, do PDDMT.`,
        lotes: [
            {
                name: 'pddmt_sub-meta_a_carta_orto_50k_pr',
                subtitle: 'Carta Ortoimagem 1:50.000 no PR',
                description: `Construção de 76 cartas ortoimagem na escala 1:50.000 visando atender o planejamento de operações no Lago de Itaipu para o CMS.`,
                zoom: [
                    [-58.999999898, -32.999999850000002], // southwestern corner of the bounds
                    [-52.0000001041, -27.499999969] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'pddmt_sub-meta_a_carta_orto_50k_pr-fill',
                        'source': 'pddmt_sub-meta_a_carta_orto_50k_pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt_sub-meta_a_carta_orto_50k_pr-border',
                        'source': 'pddmt_sub-meta_a_carta_orto_50k_pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt_sub-meta_a_carta_orto_50k_pr-text',
                        'source': 'pddmt_sub-meta_a_carta_orto_50k_pr',
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
                name: 'pddmt_sub-meta_b1_carta_topo_100k_rs',
                subtitle: 'Carta Topográfica 1:100.000 do RS',
                description: `Construção de 52 cartas topográficas na escala 1:100.000 visando atender o exercício de adestramento em Jogo de Guerra do C Av Ex na região do RS.`,
                zoom: [
                    [-58.999999898, -32.999999850000002], // southwestern corner of the bounds
                    [-52.0000001041, -27.499999969] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'pddmt_sub-meta_b1_carta_topo_100k_rs-fill',
                        'source': 'pddmt_sub-meta_b1_carta_topo_100k_rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt_sub-meta_b1_carta_topo_100k_rs-border',
                        'source': 'pddmt_sub-meta_b1_carta_topo_100k_rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt_sub-meta_b1_carta_topo_100k_rs-text',
                        'source': 'pddmt_sub-meta_b1_carta_topo_100k_rs',
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
                name: 'pddmt_sub-meta_b2_carta_topo_100k_pr',
                subtitle: 'Carta Topográfica 1:100.000 do PR',
                description: `Construção de 30 cartas topográficas na escala 1:100.000 visando atender o exercício de adestramento em Jogo de Guerra do C Av Ex na região do PR.`,
                zoom: [
                    [-58.999999898, -32.999999850000002], // southwestern corner of the bounds
                    [-52.0000001041, -27.499999969] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'pddmt_sub-meta_b2_carta_topo_100k_pr-fill',
                        'source': 'pddmt_sub-meta_b2_carta_topo_100k_pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt_sub-meta_b2_carta_topo_100k_pr-border',
                        'source': 'pddmt_sub-meta_b2_carta_topo_100k_pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt_sub-meta_b2_carta_topo_100k_pr-text',
                        'source': 'pddmt_sub-meta_b2_carta_topo_100k_pr',
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
    'mapeamento-interesse-da-forca': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre 2022',
        executed: false,
        legend: [
            1,
            12,
            2,
            5,
            6,
            3
        ],
        description: `O objetivo do presente projeto consiste na elaboração de cartas ortoimagens em escalas
        entre 1:25.000 e 1:250.000 de áreas de interesse da Força Terrestre pelo território nacional. A Área de
        Suprimento Cartográfico (ASC) do 1º Centro de Geoinformação (1º CGEO) corresponde à área de
        responsabilidade do Comando Militar do Sul (CMS), abrangendo os estados do Rio Grande do Sul, Santa Catarina
        e Paraná. Dessa forma, o 1º CGEO será responsável por executar esse projeto em sua respectiva área de
        responsabilidade.`,
        lotes: [
            {
                name: 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis',
                subtitle: 'Carta Topográfica 1:25.000 de Florianópolis',
                description: `Construção de 09 cartas topográficas na escala 1:25.000 visando atender a atualização das capitais do ASC.`,
                zoom: [
                    [-57.85792524319584, -33.96505531990365], // southwestern corner of the bounds
                    [-50.14207493280416, -22.909789655302163] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis-fill',
                        'source': 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis-border',
                        'source': 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis-text',
                        'source': 'mapintfter_sub-meta_a1_carta_topo_25k_florianopolis',
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
                name: 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana',
                subtitle: 'Carta Topográfica 1:25.000 de Uruguaiana',
                description: `Construção de 02 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.`,
                zoom: [
                    [-57.85792524319584, -33.96505531990365], // southwestern corner of the bounds
                    [-50.14207493280416, -22.909789655302163] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana-fill',
                        'source': 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana-border',
                        'source': 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana-text',
                        'source': 'mapintfter_sub-meta_a2_carta_topo_25k_uruguaiana',
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
                name: 'mapintfter_sub-meta_a3_carta_topo_25k_ms',
                subtitle: 'Carta Topográfica 1:25.000 do Mato Grosso do Sul',
                description: `Construção de 64 cartas topográficas na escala 1:25.000 na região da fronteira do Mato Grosso do Sul.`,
                zoom: [
                    [-54.104642771209704, -31.090174775111926],
                    [-50.395357523790295, -23.909732006690916]
                ],
                subtitle: 'Escala 1:50.000',
                styles: [
                    {
                        'id': 'mapintfter_sub-meta_a3_carta_topo_25k_ms-fill',
                        'source': 'mapintfter_sub-meta_a3_carta_topo_25k_ms',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_a3_carta_topo_25k_ms-border',
                        'source': 'mapintfter_sub-meta_a3_carta_topo_25k_ms',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_a3_carta_topo_25k_ms-text',
                        'source': 'mapintfter_sub-meta_a3_carta_topo_25k_ms',
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
            },
            {
                name: 'mapintfter_sub-meta_b_carta_topo_50k_rr',
                subtitle: 'Carta Topográfica 1:50.000 de Roraima',
                description: `Construção de 22 cartas topográficas na escala 1:50.000 na região da fronteira de Roraima.`,
                zoom: [
                    [-54.104642771209704, -31.090174775111926],
                    [-50.395357523790295, -23.909732006690916]
                ],
                styles: [
                    {
                        'id': 'mapintfter_sub-meta_b_carta_topo_50k_rr-fill',
                        'source': 'mapintfter_sub-meta_b_carta_topo_50k_rr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_b_carta_topo_50k_rr-border',
                        'source': 'mapintfter_sub-meta_b_carta_topo_50k_rr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_b_carta_topo_50k_rr-text',
                        'source': 'mapintfter_sub-meta_b_carta_topo_50k_rr',
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
                name: 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc',
                subtitle: 'Generalização Carta Topográfica 1:100.000',
                description: `O objetivo do presente projeto consiste em realizar a Generalização Cartográfica
                na escala 1:100.000 de produtos na região de Santa Catarina e Rio
                Grande do Sul, para gerar 12 cartas topográficas na escala 1:100.000.`,
                zoom: [
                    [-54.104642487394564, -31.09019171550016],
                    [-52.39535777550543, -23.909716233711624]
                ],
                styles: [
                    {
                        'id': 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc-fill',
                        'source': 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc-border',
                        'source': 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc-text',
                        'source': 'mapintfter_sub-meta_c_carta_topo_100k_rs_sc',
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
        legend: [3],
        description: `O objetivo principal do projeto é a elaboração de 174 (cento e setenta e quatro) cartas
        topográficas na escala 1:25.000, e seus respectivos insumos geoespaciais (ortoimagens, modelos digitais
        de elevação e dados geoespaciais vetoriais), correspondentes à RF 1, compreendendo Porto Alegre,
        Região Metropolitana e municípios adjacentes, identificadas segundo a nomenclatura utilizada no Mapa-Índice
        (MI), de acordo com as Normas e Especificações Técnicas previstas para a Infraestrutura Nacional de
        Dados Espaciais (INDE).`,
        lotes: [
            {
                name: 'conv_rs_carta_topo_25k_rs',
                subtitle: '1:25.000',
                description: `A elaboração das cartas topográficas foi executada em 5 (cinco) lotes de produção
                cartográfica. Além da base cartográfica digital contínua foram entregues as imagens brutas, os modelos
                digitais de superfície, os modelos digitais do terreno e as ortoimagens de cada carta produzida, além da carta
                topográfica em formato matricial.`,
                zoom: [
                    [-52.51051155017842, -31.384018169281973],
                    [-50.23948867872158, -29.24097876335743]
                ],
                styles: [
                    {
                        'id': 'conv_rs_carta_topo_25k_rs-fill',
                        'source': 'conv_rs_carta_topo_25k_rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'conv_rs_carta_topo_25k_rs-border',
                        'source': 'conv_rs_carta_topo_25k_rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'conv_rs_carta_topo_25k_rs-text',
                        'source': 'conv_rs_carta_topo_25k_rs',
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
                name: 'conv_rs_carta_topo_50k_rs',
                subtitle: '1:50.000',
                description: `Produção de cartas topográficas 1:50.000 por processo de generalização`,
                zoom: [
                    [-52.51051155017842, -31.384018169281973],
                    [-50.23948867872158, -29.24097876335743]
                ],
                styles: [
                    {
                        'id': 'conv_rs_carta_topo_50k_rs-fill',
                        'source': 'conv_rs_carta_topo_50k_rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'conv_rs_carta_topo_50k_rs-border',
                        'source': 'conv_rs_carta_topo_50k_rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'conv_rs_carta_topo_50k_rs-text',
                        'source': 'conv_rs_carta_topo_50k_rs',
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
        executed: false,
        legend: [3],
        description: `Execução de mapeamento topográfico, totalizando 42 e 168 folhas nas escalas
        1:50.000 e 1:25.000, respectivamente, da Área de Suprimento Cartográfico (ASC) do 1º
        Centro de Geoinformação.`,
        lotes: [
            {
                name: 'santa-catarina-25k',
                subtitle: 'Escala 1:25.000',
                zoom: [
                    [-52.26021357165334, -28.509022154962935],
                    [-49.98978660234666, -26.24097472235442]
                ],
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
                    [-52.26021357165334, -28.509022154962935],
                    [-49.98978660234666, -26.24097472235442]
                ],
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
        executed: false,
        legend: [3],
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
                    [-61.509012475599526, 1.4909562825715987],
                    [-60.49098722400048, 4.75904295524796]
                ],
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
        executed: false,
        legend: [3],
        description: `Execução de mapeamento topográfico, nas escalas 1:25.000, 1:50.000 e 1:100.000, totalizando 59 cartas topográficas e seus dados
        vetoriais na região de fronteira do Paraná.`,
        lotes: [
            {
                name: 'sisfron-17rcmec_carta_topo_25k_pr',
                subtitle: `1:25.000`,
                description: `Execução de mapeamento topográfico na escalas 1:25.000 de 44 cartas topográficas e seus dados
                vetoriais na região de fronteira do Paraná.`,
                zoom: [
                    [-54.384866243172475, -24.509027741479414],
                    [-53.490134107727535, -22.9909701451744]
                ],
                styles: [
                    {
                        'id': 'sisfron-17rcmec_carta_topo_25k_pr-fill',
                        'source': 'sisfron-17rcmec_carta_topo_25k_pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec_carta_topo_25k_pr-border',
                        'source': 'sisfron-17rcmec_carta_topo_25k_pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec_carta_topo_25k_pr-text',
                        'source': 'sisfron-17rcmec_carta_topo_25k_pr',
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
                name: 'sisfron-17rcmec_carta_topo_50k_pr',
                subtitle: `1:5.000`,
                description: `Execução de mapeamento topográfico na escalas 1:50.000 de 12 cartas topográficas e seus dados
                vetoriais na região de fronteira do Paraná.`,
                zoom: [
                    [-54.384866243172475, -24.509027741479414],
                    [-53.490134107727535, -22.9909701451744]
                ],
                styles: [
                    {
                        'id': 'sisfron-17rcmec_carta_topo_50k_pr-fill',
                        'source': 'sisfron-17rcmec_carta_topo_50k_pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec_carta_topo_50k_pr-border',
                        'source': 'sisfron-17rcmec_carta_topo_50k_pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec_carta_topo_50k_pr-text',
                        'source': 'sisfron-17rcmec_carta_topo_50k_pr',
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
                name: 'sisfron-17rcmec_carta_topo_100k_pr',
                subtitle: `1:100.000`,
                description: `Execução de mapeamento topográfico na escalas 1:100.000 de 03 cartas topográficas e seus dados
                vetoriais na região de fronteira do Paraná.`,
                zoom: [
                    [-54.384866243172475, -24.509027741479414],
                    [-53.490134107727535, -22.9909701451744]
                ],
                styles: [
                    {
                        'id': 'sisfron-17rcmec_carta_topo_100k_pr-fill',
                        'source': 'sisfron-17rcmec_carta_topo_100k_pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec_carta_topo_100k_pr-border',
                        'source': 'sisfron-17rcmec_carta_topo_100k_pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'sisfron-17rcmec_carta_topo_100k_pr-text',
                        'source': 'sisfron-17rcmec_carta_topo_100k_pr',
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
    'campo-instrucao': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre - Campos de Instrução',
        executed: false,
        legend: [3],
        description: `Execução de mapeamento topográfico, totalizando 24 folhas na escala 1:25.000,
        referentes à 5 (cinco) Campos de Instrução (CIB, CISM, CIR, CIMH e CIBSB) da Área de
        Suprimento Cartográfico (ASC) do 1º Centro de Geoinformação e que estão contidos na
        área de responsabilidade do Comando Militar do Sul.`,
        lotes: [
            {
                name: 'campo-instrucao-25k',
                subtitle: 'Escala 1:25.000',
                zoom: [
                    [-55.76038790313186, -30.259015085434463],
                    [-50.11461197696814, -26.115978807393443]
                ],
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
                    [-55.76038790313186, -30.259015085434463],
                    [-50.11461197696814, -26.115978807393443]
                ],
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
        executed: false,
        legend: [3],
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
                    [-73.75908278949825, -9.508997036002405],
                    [-53.99091741540177, 5.508999366522698]
                ],
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