const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Currículo</title>
  </head>
  <body>
      <h1>Luísa Vitória Leite Silva</h1>
  
      <p>Rua M.M.D.C, 89 – Butantã, São Paulo - SP, 05510-021</p>
      <p>Celular: (13) 9 8131-5257</p>
      <p>E-mail: luisa.silva@sou.inteli.edu.br</p>
      <p>Nacionalidade: Brasileira / Idade: 18 anos / Estado civil: Solteira</p>
  
      <h2>Objetivo:</h2>
  
       <ul> <!-- changed to list in the tutorial -->
          <li>Em busca do primeiro emprego.</li>
       </ul>
  
      <h2>Perfil profissional:</h2>
  
        <ul> <!-- changed to list in the tutorial -->
            <li>Responsável</li>
            <li>Organizada</li>
            <li>Proativa</li>
            <li>Comunicativa</li>
            <li>Pontual</li>
          </ul>
  
      <h2>Formação acadêmica:</h2>
  
          <p>Curso técnico de Administração - Concluído | 2020-2021 | ETEC EAD</p>
          <p>Ensino médio integrado ao técnico de Logística - Cursando | 2019-2021 | ETEC de 
          Praia Grande</p>
      
      <h2>Experiência profissional:</h2>
  
          <p>Buscando experiência para colocar minhas habilidades em prática.</p>
      
      <h2>Cursos complementares:</h2>
  
        <ul> <!-- changed to list in the tutorial -->
           <li>Noções de direitos do consumidor</li>
           <li>Inglês (Intermediário)</li>
         </ul>
  
      <h2>Informática:</h2>
      <p>Excel, PowerPoint e Word (Intermediário).</p>
  </body>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});