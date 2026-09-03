import os

template = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Blog Duplo Impacto</title>
    <meta name="description" content="{description}">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="../styles.css">
    
    <!-- GSAP for Animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>
    
    <!-- Config JS -->
    <script src="../config.js" defer></script>
    
    <!-- Custom JS -->
    <script src="../script.js" defer></script>
</head>
<body class="page-single-post">
    <!-- Navbar -->
    <header class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="../index.html" class="logo">
                <img src="../assets/logo.png" alt="Duplo Impacto Logo" class="logo-img">
            </a>
            <nav class="nav-links">
                <a href="../index.html#posicionamento" class="nav-link">Sobre</a>
                <a href="../index.html#treinamentos" class="nav-link">Treinamentos</a>
                <a href="../index.html#metodologia" class="nav-link">Metodologia</a>
                <a href="../blog.html" class="nav-link active">Blog</a>
            </nav>
            <a href="../index.html#contato" class="btn btn-outline nav-cta">Fale Conosco</a>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </header>

    <main>
        <article class="single-post-header">
            <div class="container">
                <div class="post-meta-top fade-in-up">
                    <span class="text-gold font-bold">{category}</span>
                    <span>{date}</span>
                    <span>{read_time} min de leitura</span>
                </div>
                <h1 class="post-title reveal-text">{title}</h1>
                
                <img src="{image}" alt="{title}" class="post-hero-image fade-in-up">
                
                <div class="post-content fade-in">
                    {content}
                </div>
            </div>
        </article>
        
        <!-- CTA final -->
        <section class="section cta-final" id="contato" style="margin-top: 4rem;">
            <div class="container">
                <div class="contact-grid">
                    <!-- Left: Info -->
                    <div class="contact-info fade-in-left">
                        <h2 class="cta-title">Transforme sua equipe hoje.</h2>
                        <p class="cta-subtitle">Preencha o formulário e agende uma reunião de diagnóstico. Nossa equipe entrará em contato rapidamente.</p>
                        
                        <div class="contact-details">
                            <p>
                                <svg class="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                <span class="cfg-email cfg-text">Carregando...</span>
                            </p>
                            <p>
                                <svg class="contact-icon" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                                <span class="cfg-telefone cfg-text">Carregando...</span>
                            </p>
                            <p>
                                <svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                <span class="cfg-endereco">Carregando...</span>
                            </p>
                        </div>
                    </div>

                    <!-- Right: Form -->
                    <div class="fade-in-right">
                        <form id="contact-form" action="" method="POST" class="contact-form">
                            <input type="hidden" name="_subject" value="Novo contato pelo site - Duplo Impacto">
                            <input type="hidden" name="_captcha" value="false">
                            <input type="hidden" name="_next" value="">
                            
                            <div class="form-group">
                                <input type="text" name="nome" placeholder="Seu Nome Completo" required class="form-control">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="E-mail Corporativo" required class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="tel" name="telefone" placeholder="Telefone / WhatsApp" required class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" name="empresa" placeholder="Nome da Empresa" required class="form-control">
                            </div>
                            <div class="form-group">
                                <textarea name="mensagem" placeholder="Como podemos ajudar sua equipe?" rows="4" required class="form-control"></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">ENVIAR MENSAGEM</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="../assets/logo.png" alt="Duplo Impacto" class="footer-logo">
                    <p class="footer-desc">Transformando equipes boas em equipes de excelência através de treinamentos de alta performance.</p>
                </div>
                <div class="footer-links">
                    <h4>Navegação</h4>
                    <a href="../index.html#hero">Início</a>
                    <a href="../index.html#posicionamento">Sobre Nós</a>
                    <a href="../index.html#treinamentos">Treinamentos</a>
                    <a href="../blog.html">Blog</a>
                </div>
                <div class="footer-contact">
                    <h4>Contato</h4>
                    <p class="cfg-email cfg-text">Carregando...</p>
                    <p class="cfg-telefone cfg-text">Carregando...</p>
                    <p class="cfg-endereco">Carregando...</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Duplo Impacto. Todos os direitos reservados.</p>
                <div class="social-links">
                    <a href="#" class="cfg-linkedin" aria-label="LinkedIn" target="_blank">In</a>
                    <a href="#" class="cfg-instagram" aria-label="Instagram" target="_blank">Ig</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
"""

posts = [
    {
        "filename": "alinhamento-cultural.html",
        "title": "Alinhamento Cultural: O Ingrediente Secreto para a Retenção de Talentos",
        "description": "Seus melhores funcionários não pedem demissão da empresa, eles pedem demissão da cultura e dos líderes diretos.",
        "category": "Cultura",
        "date": "15 Ago, 2026",
        "read_time": "4",
        "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
        "content": "<p>Um dos maiores mitos do mundo corporativo é que um bom salário e benefícios generosos são suficientes para reter talentos excepcionais. A verdade é que profissionais de alto nível buscam muito mais do que compensação financeira: eles buscam propósito, pertencimento e congruência de valores.</p><p>Quando a cultura da empresa não reflete seus valores reais, ou quando as lideranças operam de forma dissonante, o ambiente se torna tóxico. As melhores mentes da sua equipe são as primeiras a perceber essa desconexão e, invariavelmente, as primeiras a sair.</p><h2>O Custo Invisível do Desalinhamento</h2><p>O maior problema do desalinhamento cultural é que ele não aparece imediatamente no balanço financeiro. Ele corrói a motivação diária de forma silenciosa. É a apatia na hora de propor uma ideia nova, é a falta de colaboração espontânea, é a retenção de informação crucial para o sucesso de um projeto.</p><blockquote>\"O verdadeiro alinhamento não está no que está escrito na parede, mas em como as pessoas agem quando ninguém está olhando.\"</blockquote><h2>Os Pilares de uma Cultura Forte</h2><p>Para reter talentos, o alinhamento cultural deve ser intencional. Na Duplo Impacto, focamos em estruturar os seguintes pilares:</p><ul><li><strong>Transparência Radical:</strong> Não esconder problemas e celebrar vitórias coletivamente.</li><li><strong>Coerência da Liderança:</strong> O comportamento da diretoria deve ser o espelho da cultura que se deseja na base.</li><li><strong>Rituais de Pertencimento:</strong> Criar momentos reais de conexão que reforcem os valores do negócio, muito além do discurso vazio.</li></ul><h2>O Papel do RH e dos Gestores</h2><p>O RH não é o único guardião da cultura. O líder direto tem 70% de impacto sobre o clima da sua equipe imediata. Portanto, treinar gestores para que sejam embaixadores da cultura é a estratégia mais barata e eficiente para reduzir o turnover.</p><p>Invista na cultura hoje, e colha uma equipe engajada amanhã.</p>"
    },
    {
        "filename": "eliminando-ruidos.html",
        "title": "Eliminando Ruídos: Comunicação Assertiva no Ambiente Corporativo",
        "description": "Por que tantos projetos fracassam? A resposta quase sempre reside na qualidade da comunicação interna.",
        "category": "Comunicação",
        "date": "02 Ago, 2026",
        "read_time": "6",
        "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200",
        "content": "<p>A comunicação corporativa costuma sofrer de dois extremos perigosos: ou é agressiva demais, gerando atritos desnecessários, ou é passiva demais, escondendo problemas críticos sob o tapete da diplomacia corporativa.</p><p>Estatísticas mostram que falhas de comunicação são as principais responsáveis pelo atraso de projetos e pela insatisfação de clientes. Em um mercado veloz, a falta de clareza é um luxo que empresas de alta performance não podem pagar.</p><h2>O Impacto do Ruído</h2><p>Comunicação assertiva não significa falta de educação. Significa clareza. Em equipes de alta performance, o tempo é o recurso mais valioso. Mensagens ambíguas, e-mails excessivamente longos e reuniões sem pauta são verdadeiros drenos de produtividade.</p><blockquote>\"A maior ilusão sobre a comunicação é achar que ela aconteceu simplesmente porque as palavras foram ditas.\"</blockquote><h2>Como Estabelecer Canais Efetivos</h2><p>Para eliminar o ruído e focar no que importa, implementamos os seguintes processos em nossas mentorias:</p><ul><li><strong>Reuniões com Propósito:</strong> Toda reunião deve ter uma pauta clara, um facilitador designado e um documento de 'next steps' ao final.</li><li><strong>Feedback Contínuo:</strong> A cultura de esperar pela avaliação anual está morta. O feedback deve ser em tempo real.</li><li><strong>Comunicação Assíncrona:</strong> Aprender a diferenciar urgência (chat, ligação) de importância (e-mail, documentação).</li></ul><h2>A Nova Postura da Liderança</h2><p>Treinar a equipe para se comunicar com assertividade é garantir que a mensagem certa chegue à pessoa certa, no momento certo. O líder deve ser o exemplo máximo dessa clareza.</p><p>Quando o ruído diminui, a velocidade de execução aumenta exponencialmente.</p>"
    },
    {
        "filename": "feedback-alto-impacto.html",
        "title": "Feedback de Alto Impacto: Como Criticar Sem Desmotivar",
        "description": "Entenda como transformar o momento do feedback em uma ferramenta poderosa de desenvolvimento e confiança.",
        "category": "Liderança",
        "date": "28 Jul, 2026",
        "read_time": "5",
        "image": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
        "content": "<p>Muitos gestores evitam dar feedback negativo com medo de desmotivar o funcionário, ou, quando dão, o fazem de uma forma mal estruturada que acaba gerando ressentimento e desengajamento imediato.</p><p>O resultado desse medo é uma equipe cega para os próprios pontos cegos e um líder sobrecarregado, tentando compensar as falhas que nunca teve a coragem de apontar e corrigir adequadamente.</p><h2>A Armadilha do \"Feedback Sanduíche\"</h2><p>O método tradicional de elogiar, criticar e elogiar novamente se tornou obsoleto. Profissionais percebem a técnica e, por fim, desvalorizam o elogio, focando apenas na crítica que vem no meio. O foco deve ser a sinceridade radical, entregue com genuíno cuidado pessoal.</p><blockquote>\"Feedback não é um julgamento sobre o valor da pessoa, é um diagnóstico sobre o resultado de uma ação.\"</blockquote><h2>Estruturando um Feedback Efetivo</h2><p>Para construir a segurança psicológica necessária, recomendamos três passos:</p><ul><li><strong>Contexto Claro:</strong> Descreva a situação exata onde o comportamento ocorreu, sem generalizações como 'você sempre' ou 'você nunca'.</li><li><strong>Foco na Ação, Não na Pessoa:</strong> Em vez de dizer 'você foi desorganizado', diga 'a planilha foi entregue fora do formato combinado'.</li><li><strong>Plano de Ação Conjunto:</strong> O líder não apenas aponta o erro, mas se coloca à disposição para construir o caminho da melhoria.</li></ul><h2>Desenvolvimento Contínuo</h2><p>Quando o líder utiliza metodologias estruturadas, consegue demonstrar que a crítica tem como objetivo único o desenvolvimento profissional daquele colaborador. Isso cria laços de confiança inquebráveis.</p><p>Um feedback bem dado não é apenas uma correção, é o maior sinal de que a empresa investe no futuro daquela pessoa.</p>"
    },
    {
        "filename": "silos-corporativos.html",
        "title": "Silos Corporativos: O Inimigo Invisível da Produtividade",
        "description": "Descubra como os silos departamentais destroem o valor da sua empresa e como derrubá-los.",
        "category": "Cultura",
        "date": "14 Jul, 2026",
        "read_time": "7",
        "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
        "content": "<p>Marketing não fala com Vendas. Vendas reclama do Suporte. O Suporte culpa o Produto. Esse é o clássico cenário de silos corporativos, onde cada departamento age como uma empresa independente, defendendo seus próprios interesses.</p><p>Esse tipo de cultura fragmentada leva à duplicação de esforços, lentidão absurda na inovação e, o mais grave, a uma experiência do cliente completamente fraturada e cheia de atritos inexplicáveis.</p><h2>Como os Silos se Formam</h2><p>A fragmentação quase nunca começa por maldade, mas sim por falta de comunicação entre as lideranças setoriais e por modelos de incentivos e bônus que premiam o sucesso isolado do departamento em vez do crescimento da empresa como um todo.</p><blockquote>\"Se você mede o sucesso de um departamento isoladamente, você está treinando sua equipe para competir contra si mesma.\"</blockquote><h2>Derrubando as Paredes</h2><p>Para quebrar essa dinâmica destrutiva, a Duplo Impacto foca em alinhar os times através de:</p><ul><li><strong>Metas Compartilhadas (OKRs):</strong> Vincular o bônus de diferentes departamentos a um mesmo resultado de negócio, forçando a colaboração natural.</li><li><strong>Squads Multidisciplinares:</strong> Formar pequenos grupos com membros de diferentes áreas para resolver problemas complexos.</li><li><strong>Transparência de Dados:</strong> Garantir que todos tenham acesso ao mesmo dashboard de resultados, eliminando a retenção de informações como moeda de poder.</li></ul><h2>Uma Nova Mentalidade</h2><p>Para transformar a cultura, a liderança precisa ser a primeira a mudar o discurso. A mentalidade deve mudar permanentemente de 'nós contra eles' para 'todos nós juntos contra o problema do cliente'.</p><p>Uma empresa sem silos se move mais rápido e vence em qualquer cenário competitivo.</p>"
    },
    {
        "filename": "ciencia-responsabilidade-extrema.html",
        "title": "A Ciência da Responsabilidade Extrema (Accountability)",
        "description": "O conceito revolucionário que transforma vitimismo em ação direcionada para resultados.",
        "category": "Mindset",
        "date": "05 Jul, 2026",
        "read_time": "5",
        "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
        "content": "<p>A Responsabilidade Extrema (Accountability) é o princípio de que o indivíduo é 100% responsável por tudo o que afeta sua missão e seus resultados. Não existem desculpas esfarrapadas. Não existem fatores externos incontroláveis aos quais possamos atribuir a culpa.</p><p>Quando a cultura do vitimismo toma conta de uma corporação, o foco muda de 'como podemos resolver isso?' para 'de quem foi a culpa?'. Isso drena a energia da equipe e estagna qualquer possibilidade de inovação real.</p><h2>Vitimismo vs Protagonismo</h2><p>Equipes medianas são verdadeiras mestres em explicar, com detalhes gráficos, por que falharam. Elas culpam o mercado, a economia, o colega de trabalho, a ferramenta. Já equipes de alta performance assumem o erro imediatamente.</p><blockquote>\"Quando uma equipe adota a Responsabilidade Extrema, o impossível se torna apenas uma questão de planejamento.\"</blockquote><h2>Implementando a Prática</h2><p>A transição de uma cultura reativa para uma cultura proativa (Accountable) exige três pilares fundamentais:</p><ul><li><strong>Alinhamento de Expectativas:</strong> Ninguém pode ser cobrado por algo que não foi claramente definido. Acordos claros previnem cobranças injustas.</li><li><strong>Autonomia com Limites:</strong> Dê poder de decisão, mas garanta que o profissional tem as ferramentas para arcar com as consequências das suas escolhas.</li><li><strong>Celebração do Erro Honesto:</strong> O erro na busca pela inovação deve ser usado como aprendizado rápido, e nunca punido com hostilidade.</li></ul><h2>O Papel do Líder</h2><p>O líder deve ser o primeiro a bater no peito e dizer 'a culpa foi minha'. Quando o gestor absorve a responsabilidade pela falha e distribui o crédito pelo sucesso, a equipe ganha a confiança necessária para assumir riscos calculados.</p><p>Accountability não é sobre ser punido; é sobre ter o poder de mudar a realidade do seu próprio trabalho.</p>"
    },
    {
        "filename": "roi-desenvolvimento-humano.html",
        "title": "Treinamento Não é Gasto: Como Medir o ROI do Desenvolvimento",
        "description": "Aprenda as métricas essenciais para justificar e acompanhar o investimento em treinamentos comportamentais.",
        "category": "Estratégia",
        "date": "20 Jun, 2026",
        "read_time": "8",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        "content": "<p>Ainda hoje, muitas empresas cometem o erro estratégico de cortar os orçamentos de treinamento corporativo na primeira instabilidade financeira, classificando-os erroneamente como 'gastos supérfluos' ou 'luxos de mercado favorável'.</p><p>Isso acontece, em grande parte, porque o RH tradicional sempre teve dificuldade em comprovar o retorno financeiro real (ROI) dessas ações, limitando-se a relatar métricas de vaidade, como 'número de horas treinadas' e 'nível de satisfação da turma'.</p><h2>Do Lúdico ao Pragmático</h2><p>O mercado mudou e o desenvolvimento humano precisa conversar diretamente com a planilha de Excel da diretoria financeira. É essencial mudar a lente de como enxergamos a capacitação: ela não serve apenas para deixar o funcionário feliz, serve para alavancar a receita e reduzir custos operacionais da empresa.</p><blockquote>\"O verdadeiro custo não está em treinar um funcionário e ele ir embora. Está em não treiná-lo e ele ficar.\"</blockquote><h2>Métricas que Importam de Verdade</h2><p>Para mudar essa visão na sua empresa, é preciso ligar o desenvolvimento humano aos KPIs (Indicadores-chave) do negócio:</p><ul><li><strong>Redução de Turnover:</strong> Quanto custa para a empresa recrutar, contratar e treinar um novo colaborador? Reduzir a rotatividade em 10% já paga qualquer treinamento de liderança de alto nível.</li><li><strong>Redução de Erros e Retrabalho:</strong> Equipes melhor treinadas tecnicamente e comportamentalmente erram menos, reduzindo o custo oculto do retrabalho e desperdício.</li><li><strong>Aceleração de Ramp-up:</strong> Tempo é dinheiro. Treinamentos eficientes fazem com que o novo talento chegue à sua produtividade máxima na metade do tempo convencional.</li></ul><h2>Conclusão Estratégica</h2><p>Quando medido corretamente, o treinamento de qualidade se prova indiscutivelmente como o investimento de maior e mais rápida alavancagem que uma organização pode realizar.</p><p>Uma equipe excepcional é o único diferencial competitivo que o seu concorrente não pode simplesmente copiar.</p>"
    }
]

for post in posts:
    content = template.format(**post)
    filepath = os.path.join("blog", post["filename"])
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated 6 posts successfully with expanded content!")
