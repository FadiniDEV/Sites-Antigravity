const blogAuto = "assets/blog-auto.jpg";
const blogResidencial = "assets/blog-residencial.jpg";
const blogVida = "assets/blog-vida.jpg";
const blogEmpresarial = "assets/blog-empresarial.jpg";
const blogEscolher = "assets/blog-escolher.jpg";
const blogSaude = "assets/blog-saude.jpg";
const blogViagem = "assets/blog-viagem.jpg";
const blogMoto = "assets/blog-moto.jpg";
const blogCaminhao = "assets/blog-caminhao.jpg";
const blogFrotas = "assets/blog-frotas.jpg";

const blogPosts = [
  {
    id: "1",
    slug: "como-escolher-um-seguro-auto-ideal-para-o-seu-perfil",
    title: "Como escolher um seguro auto ideal para o seu perfil",
    category: "Seguro Auto",
    date: "12 ago 2026",
    readTime: "5 min de leitura",
    image: blogAuto,
    excerpt:
      "Descubra quais coberturas realmente importam, como economizar no prêmio e proteger seu veículo contra imprevistos cotidianos.",
    author: {
      name: "Equipe Lifema",
      role: "Especialistas em Seguro Auto",
    },
    content: {
      intro:
        "Contratar um seguro auto vai muito além de apenas cumprir uma formalidade. É uma decisão estratégica para proteger o seu patrimônio e garantir tranquilidade nas suas viagens diárias e passeios em família. Com a grande variedade de opções no mercado, saber escolher as coberturas adequadas ao seu perfil é fundamental.",
      sections: [
        {
          title: "1. Avalie o uso do seu veículo",
          text: "O primeiro passo é analisar a sua rotina. Você utiliza o carro diariamente para trabalhar, faz longas viagens aos finais de semana ou apenas roda pequeno trecho urbano? O local onde o veículo fica estacionado durante o dia e à noite também influencia diretamente na avaliação de risco.",
          bullets: [
            "Quilometragem média mensal percorrida",
            "Garagem fechada na residência e no trabalho",
            "Principais condutores adicionais (ex: jovens menores de 25 anos)",
          ],
        },
        {
          title: "2. Cobertura básica vs. Cobertura compreensiva",
          text: "A cobertura básica normalmente cobre apenas danos a terceiros (RCF-V). Já a cobertura compreensiva (conhecida como total) protege contra colisão, incêndio, roubo, furto e acidentes naturais como alagamentos e queda de árvores.",
        },
        {
          title: "3. Serviços adicionais que valem a pena",
          text: "Assistência 24 horas com guincho ilimitado, carro reserva por período estendido e proteção aos vidros, faróis e retrovisores são diferenciais que custam pouco no valor final e salvam em momentos imprevisíveis.",
          bullets: [
            "Guincho sem limite de quilometragem",
            "Proteção para faróis de LED e lanternas",
            "Carro reserva com ar-condicionado",
          ],
        },
      ],
      conclusion:
        "Na Lifema Seguros, comparamos as melhores seguradoras do mercado para entregar uma apólice sob medida para o seu orçamento, sem coberturas desnecessárias e com máximo atendimento em sinistros.",
    },
  },
  {
    id: "2",
    slug: "seguro-residencial-o-que-cobre-e-como-contratar",
    title: "Seguro residencial: o que cobre e como contratar",
    category: "Seguro Residencial",
    date: "05 ago 2026",
    readTime: "4 min de leitura",
    image: blogResidencial,
    excerpt:
      "Aprenda por que o seguro residencial é um dos investimentos de proteção com melhor custo-benefício do mercado.",
    author: {
      name: "Equipe Lifema",
      role: "Especialistas em Proteção Patrimonial",
    },
    content: {
      intro:
        "Muitas pessoas acreditam que o seguro residencial é caro ou desnecessário, mas a realidade é o oposto: ele é um dos seguros mais acessíveis do mercado e cobre eventos devastadores como incêndios, vendavais e roubos.",
      sections: [
        {
          title: "1. O que a cobertura principal engloba?",
          text: "A cobertura básica obrigatória protege contra danos materiais causados por incêndio, queda de raio dentro do terreno da casa e explosão de qualquer natureza.",
        },
        {
          title: "2. Coberturas adicionais indispensáveis",
          text: "Para uma proteção completa, vale a pena incluir assistências contra danos elétricos (queima de eletrodomésticos por surtos de energia), vendaval, impacto de veículos e roubo de bens.",
          bullets: [
            "Danos elétricos em TVs, geladeiras e computadores",
            "Roubo e furto qualificado de bens no interior do imóvel",
            "Responsabilidade civil familiar (danos causados a vizinhos)",
          ],
        },
        {
          title: "3. Serviços emergenciais inclusos",
          text: "Um grande diferencial do seguro residencial é o serviço de assistência 24h, que inclui encanador, eletricista, chaveiro e reparo de eletrodomésticos sem custo adicional de mão de obra.",
        },
      ],
      conclusion:
        "Proteger o seu lar é proteger a história da sua família. Entre em contato com a Lifema Seguros para simular a proteção da sua residência por centavos ao dia.",
    },
  },
  {
    id: "3",
    slug: "seguro-de-vida-quando-e-por-que-fazer",
    title: "Seguro de vida: quando e por que fazer",
    category: "Seguro de Vida",
    date: "28 jul 2026",
    readTime: "6 min de leitura",
    image: blogVida,
    excerpt:
      "Desmistifique os mitos sobre seguro de vida e entenda como ele oferece benefícios em vida, como proteção financeira em doenças graves.",
    author: {
      name: "Equipe Lifema",
      role: "Consultores de Vida e Previdência",
    },
    content: {
      intro:
        "O seguro de vida é frequentemente associado apenas à cobertura em caso de falecimento, mas os planos modernos focam principalmente na proteção do segurado ainda em vida.",
      sections: [
        {
          title: "1. Benefícios para usar ainda em vida",
          text: "Planos modernos incluem indenizações antecipadas em diagnósticos de doenças graves (como câncer, infarto e AVC), invalidez por acidente ou doença e diárias por incapacidade temporária de trabalho.",
          bullets: [
            "Indenização direta ao diagnosticar doenças graves",
            "Auxílio financeiro em afastamentos temporários do trabalho",
            "Suporte para profissionais autônomos e liberais",
          ],
        },
        {
          title: "2. Segurança para os seus dependentes",
          text: "Em momentos difíceis, a indenização do seguro de vida não entra em inventário e é isenta de imposto de renda, garantindo liquidez imediata para a família manter o padrão de vida e arcar com despesas imediatas.",
        },
      ],
      conclusion:
        "Quanto mais jovem e saudável você contratar seu seguro de vida, menor será o valor das parcelas. Converse com um dos nossos corretores especializados e planeje seu futuro.",
    },
  },
  {
    id: "4",
    slug: "seguro-empresarial-proteja-seu-negocio-desde-o-inicio",
    title: "Seguro empresarial: proteja seu negócio desde o início",
    category: "Seguro Empresarial",
    date: "20 jul 2026",
    readTime: "5 min de leitura",
    image: blogEmpresarial,
    excerpt:
      "Evite que imprevistos operacionais ou danos ao patrimônio paralisem as atividades da sua empresa.",
    author: {
      name: "Equipe Lifema",
      role: "Consultores Corporativos",
    },
    content: {
      intro:
        "Um imprevisto na estrutura física da sua empresa, seja um incêndio, um furto de equipamentos de TI ou um vazamento de água, pode interromper o faturamento por semanas. O seguro empresarial garante a continuidade do seu negócio.",
      sections: [
        {
          title: "1. Proteção patrimonial completa",
          text: "Cobre o prédio físico, máquinas, estoques de mercadorias e móveis corporativos contra incêndios, explosões, tumultos e danos elétricos.",
        },
        {
          title: "2. Lucros cessantes",
          text: "Se a sua empresa precisar parar as operações devido a um sinistro coberto, a cláusula de Lucros Cessantes indeniza as despesas fixas (como salários e aluguel) e o lucro líquido esperado durante o período de paralisação.",
          bullets: [
            "Manutenção do pagamento de funcionários durante reformas",
            "Reembolso de aluguel em local temporário",
            "Proteção de equipamentos e servidores vitais",
          ],
        },
      ],
      conclusion:
        "Sua empresa levou anos para se consolidar. Garanta a sustentabilidade do seu negócio com as soluções empresariais sob medida da Lifema Seguros.",
    },
  },
  {
    id: "5",
    slug: "seguro-saude-como-escolher-o-melhor-plano-para-voce-e-sua-empresa",
    title: "Seguro saúde: como escolher o melhor plano para você e sua empresa",
    category: "Seguro Saúde",
    date: "10 jul 2026",
    readTime: "5 min de leitura",
    image: blogSaude,
    excerpt:
      "Entenda os tipos de planos de saúde, rede credenciada, coparticipação e como garantir o melhor custo-benefício para sua família ou equipe.",
    author: {
      name: "Equipe Lifema",
      role: "Consultores de Benefícios e Saúde",
    },
    content: {
      intro:
        "Ter acesso a um plano de saúde de qualidade é uma das maiores garantias de tranquilidade para qualquer família ou empresa. A escolha certa equilibra cobertura abrangente com mensalidades previsíveis.",
      sections: [
        {
          title: "1. Planos Individuais, Familiares e Empresariais (PME)",
          text: "Quem possui CNPJ (inclusive MEI a partir de 6 meses de abertura) pode contratar planos de saúde empresariais com valores até 40% mais acessíveis em comparação aos planos individuais tradicionais.",
          bullets: [
            "Contratação a partir de 2 ou 3 vidas com CNPJ ativo",
            "Melhores tabelas de preços e coberturas hospitalares",
            "Possibilidade de inclusão de dependentes diretos",
          ],
        },
        {
          title: "2. Rede credenciada e abrangência geográfica",
          text: "Antes de fechar o plano, verifique os hospitais, laboratórios e prontos-socorros de referência na sua região, bem como a necessidade de cobertura nacional em viagens frequentes.",
        },
        {
          title: "3. Coparticipação: vale a pena?",
          text: "A modalidade com coparticipação reduz significativamente a mensalidade fixa, cobrando uma pequena taxa apenas quando consultas ou exames são realizados, ideal para pessoas com rotina médica preventiva.",
          bullets: [
            "Mensalidades fixas mais baixas",
            "Controle de uso consciente",
            "Tetos máximos de cobrança por procedimento",
          ],
        },
      ],
      conclusion:
        "Na Lifema Seguros, simulamos as principais operadoras do Brasil para encontrar o plano com a rede médica que você confia e que cabe perfeitamente no seu bolso.",
    },
  },
  {
    id: "6",
    slug: "seguro-viagem-por-que-e-indispensavel-nas-suas-ferias-ou-trabalho",
    title: "Seguro viagem: por que é indispensável nas suas férias ou trabalho",
    category: "Seguro Viagem",
    date: "04 jul 2026",
    readTime: "4 min de leitura",
    image: blogViagem,
    excerpt:
      "Saiba como o seguro viagem protege contra despesas médicas internacionais exorbitantes, extravio de bagagem e cancelamentos de voo.",
    author: {
      name: "Equipe Lifema",
      role: "Especialistas em Seguro Viagem",
    },
    content: {
      intro:
        "Viajar é uma das melhores experiências da vida, mas imprevistos de saúde no exterior ou problemas com bagagens podem transformar o sonho em uma grande dor de cabeça financeira se você não estiver protegido.",
      sections: [
        {
          title: "1. Custos médicos no exterior",
          text: "Em países como os Estados Unidos e muitos destinos europeus, uma simples consulta médica de urgência ou internação pode custar milhares de dólares. O seguro viagem cobre despesas médico-hospitalares completas com atendimento em português.",
          bullets: [
            "Cobertura médica e odontológica de urgência",
            "Telemedicina 24h em qualquer lugar do mundo",
            "Repatriação médica e retorno sanitário",
          ],
        },
        {
          title: "2. Exigência obrigatória em diversos países",
          text: "Mais de 30 países do Tratado de Schengen na Europa exigem seguro viagem obrigatório com cobertura mínima de 30 mil euros para permitir a entrada de turistas.",
        },
        {
          title: "3. Proteção para bagagem e voos",
          text: "Indenização complementar em caso de extravio ou dano de malas pelas companhias aéreas, além de reembolso de despesas causadas por atrasos graves de voo.",
          bullets: [
            "Rastreamento e auxílio em bagagem extraviada",
            "Reembolso de hospedagem em atrasos involuntários",
            "Assistência jurídica no exterior",
          ],
        },
      ],
      conclusion:
        "Viaje tranquilo pelo Brasil e pelo mundo. Fale com a Lifema Seguros e contrate seu seguro viagem sob medida em minutos antes do embarque.",
    },
  },
  {
    id: "7",
    slug: "seguro-moto-tudo-o-que-voce-precisa-saber-para-proteger-sua-motocicleta",
    title: "Seguro moto: tudo o que você precisa saber para proteger sua motocicleta",
    category: "Seguro Moto",
    date: "26 jun 2026",
    readTime: "5 min de leitura",
    image: blogMoto,
    excerpt:
      "Conheça as principais coberturas para motocicletas, proteção contra roubo, furto, acidentes e assistência 24h na estrada e na cidade.",
    author: {
      name: "Equipe Lifema",
      role: "Especialistas em Duas Rodas",
    },
    content: {
      intro:
        "A sensação de liberdade em duas rodas atrai cada vez mais motociclistas, mas a exposição ao trânsito e os índices de roubo tornam o seguro para motos um item fundamental de segurança.",
      sections: [
        {
          title: "1. Proteção contra Roubo e Furto",
          text: "Com a alta demanda por peças no mercado paralelo, motos de todas as cilindradas estão expostas a riscos constantes. A cobertura contra roubo garante indenização integral pela tabela FIPE em caso de não localização do veículo.",
          bullets: [
            "Indenização rápida baseada na tabela FIPE",
            "Instalação de rastreador sem custo adicional em seguradoras parceiras",
            "Cobertura válida em todo o território nacional",
          ],
        },
        {
          title: "2. Cobertura compreensiva e colisões",
          text: "Cobre danos materiais à sua moto causados por quedas, acidentes e colisões, permitindo o conserto com peças originais em oficinas especializadas.",
        },
        {
          title: "3. Assistência 24h para motociclistas",
          text: "Guincho especializado para motocicletas, socorro mecânico, troca de pneus e transporte do piloto caso ocorra pane seca ou mecânica na estrada.",
          bullets: [
            "Reboque com plataforma adequada para motos",
            "Auxílio em pane elétrica ou mecânica",
            "Cobertura de capacete e acessórios em planos premium",
          ],
        },
      ],
      conclusion:
        "Pilote com liberdade e sem preocupações. A Lifema Seguros cota com as seguradoras líderes do segmento para proteger sua motocicleta com as melhores condições.",
    },
  },
  {
    id: "8",
    slug: "seguro-caminhao-protecao-completa-para-veiculos-pesados-e-cargas",
    title: "Seguro caminhão: proteção completa para veículos pesados e cargas",
    category: "Seguro Caminhão",
    date: "18 jun 2026",
    readTime: "6 min de leitura",
    image: blogCaminhao,
    excerpt:
      "Entenda as coberturas essenciais para caminhoneiros autônomos e transportadoras: colisão, tombamento, roubo e assistência pesada 24 horas.",
    author: {
      name: "Equipe Lifema",
      role: "Consultores de Transporte Pesado",
    },
    content: {
      intro:
        "O caminhão é a ferramenta de trabalho e sustento de motoristas autônomos e frotistas. Qualquer paralisação por acidente ou sinistro representa prejuízo imediato. O seguro caminhão foi criado para manter a sua operação sempre em movimento.",
      sections: [
        {
          title: "1. Coberturas específicas para o transporte rodoviário",
          text: "Diferente de veículos leves, os caminhões necessitam de coberturas desenhadas para longas distâncias, incluindo proteção para cavalos mecânicos, carretas, baús e carrocerias.",
          bullets: [
            "Colisão, capotamento, tombamento e incêndio",
            "Roubo e furto do veículo e implementos rodoviários",
            "Danos a terceiros (RCF) com limites estendidos",
          ],
        },
        {
          title: "2. Assistência 24h para veículos pesados",
          text: "Guinchos pesados com capacidade para remover carretas carregadas, destombamento, socorro mecânico no acostamento e táxi/hospedagem para o motorista.",
        },
        {
          title: "3. Integração com seguro de carga (RCTR-C e RC-DC)",
          text: "Alinhar o seguro do caminhão com as apólices de transporte de carga garante proteção jurídica e financeira total para o transportador perante os embarcadores.",
          bullets: [
            "Compatibilidade com planos de gerenciamento de risco (PGR)",
            "Descontos para veículos com rastreadores homologados",
            "Cobertura para vidros, faróis e retrovisores de grande porte",
          ],
        },
      ],
      conclusion:
        "Não deixe a sua principal ferramenta desprotegida nas rodovias. A Lifema Seguros oferece consultoria especializada para caminhões individuais e conjuntos pesados.",
    },
  },
  {
    id: "9",
    slug: "seguro-para-frotas-como-reduzir-custos-e-proteger-os-veiculos-da-empresa",
    title: "Seguro para frotas: como reduzir custos e proteger os veículos da empresa",
    category: "Seguro para Frotas",
    date: "11 jun 2026",
    readTime: "5 min de leitura",
    image: blogFrotas,
    excerpt:
      "Descubra como a contratação coletiva de frotas reduz o custo por veículo, otimiza o fluxo de caixa e centraliza a gestão de sinistros da sua empresa.",
    author: {
      name: "Equipe Lifema",
      role: "Consultores de Gestão de Frotas",
    },
    content: {
      intro:
        "Gerenciar dezenas ou centenas de veículos corporativos exige controle rigoroso de custos e rapidez no atendimento em casos de acidentes. O seguro para frotas oferece condições comerciais muito superiores às apólices individuais.",
      sections: [
        {
          title: "1. Vantagens da contratação em grupo",
          text: "A partir de 2 ou 3 veículos já é possível unificar as apólices corporativas sob um único contrato, facilitando o vencimento, a emissão de faturas e garantindo descontos progressivos.",
          bullets: [
            "Faturamento centralizado em data única",
            "Descontos substanciais por volume de veículos",
            "Inclusão e exclusão ágil de veículos durante a vigência",
          ],
        },
        {
          title: "2. Cobertura personalizada por perfil de operação",
          text: "Personalize coberturas diferentes para veículos da diretoria, equipe comercial e utilitários de entrega, pagando apenas pelo nível de proteção exigido em cada função.",
        },
        {
          title: "3. Gestão de sinistros e carro reserva corporativo",
          text: "Canal exclusivo de atendimento para frotas corporativas, diminuindo o tempo de parada do veículo em oficinas credenciadas e fornecendo carros reservas utilitários.",
          bullets: [
            "Acompanhamento em tempo real do status de reparos",
            "Carro reserva utilitário e de passeio",
            "Relatórios de sinistralidade para suporte à gestão de risco",
          ],
        },
      ],
      conclusion:
        "Otimize o orçamento da sua empresa com as soluções corporativas da Lifema Seguros. Nossos especialistas analisam sua frota para propor o melhor formato técnico e comercial.",
    },
  },
  {
    id: "10",
    slug: "o-que-analisar-antes-de-contratar-um-seguro",
    title: "O que analisar antes de contratar um seguro",
    category: "Dicas",
    date: "02 jun 2026",
    readTime: "4 min de leitura",
    image: blogEscolher,
    excerpt:
      "Confira um checklist prático dos itens mais importantes a se checar no contrato da apólice antes de fechar o negócio.",
    author: {
      name: "Equipe Lifema",
      role: "Equipe Técnica",
    },
    content: {
      intro:
        "Assinar um contrato de seguro sem compreender os termos principais pode resultar em surpresas desagradáveis na hora de acionar a corretora. Preparamos este guia rápido para te ajudar.",
      sections: [
        {
          title: "Checklist indispensável",
          text: "Fique atento aos seguintes termos na proposta:",
          bullets: [
            "Valor da franquia (obrigatória vs. reduzida)",
            "Limites máximos de indenização para terceiros",
            "Regras e prazos para cancelamento ou endosso",
            "Exclusões de cobertura presentes no contrato",
          ],
        },
      ],
      conclusion:
        "Ter o acompanhamento transparente de uma corretora com experiência faz toda a diferença. Na Lifema Seguros, explicamos cada detalhe com clareza.",
    },
  },
];

module.exports = blogPosts;