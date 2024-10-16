import React from "react";
import "../layout/Impacto.css";
import wavesImage from '../img/wave.webp'

function Impacto() {
  return (
    <div className="impacto-container">
      <div className="hero-contente">
        <h1 className="hero-title">Impacto Ambiental do Descarte Inadequado</h1>
        <p className="hero-description">
          O descarte inadequado de medicamentos vencidos ou não utilizados pode gerar danos significativos ao meio ambiente.
        </p>
      </div>

      <div className="info-section">
        <h2>
        Perigos do Descarte Inadequado de Medicamentos: Impactos no Meio Ambiente e na Saúde Pública
        </h2>
        <hr />
      
      </div>

      {/* Estrutura da imagem central com as seções laterais */}
      <div className="imagee-structure">

        <div className="sides-section">
          <h3>Importância de Descartar corretamente</h3>
          <p>
          O descarte inconsciente de medicamentos requer mais atenção. Aqui, ensinamos como descartar corretamente, indo a pontos de coleta ou agendando serviços em nosso app.
        </p>
        </div>

        <div className="center-image">
        </div>

        <div className="rights-section">
          <h3>Riscos e Maleficios</h3>
          <p>
          Jogar esses medicamentos no lixo comum ou na descarga sanitária pode liberar substâncias químicas nocivas ao solo, à fauna e à saúde pública, afetando qualquer um que entrar em contato com áreas contaminadas.
        </p>
        <p>
          Ao ser descartado pela rede de esgoto, os medicamentos também afetam a qualidade da água. Diferentes tipos de medicamentos apresentam riscos variados, dependendo de suas características, como inflamabilidade, corrosividade, reatividade e toxicidade.
        </p>
      
        </div>

      </div>

         {/* Imagem de onda acima da estrutura da imagem */}
         <img src={wavesImage} alt="Onda" className="waves-image" />

      <div className="info-content">
        <h2>Por que é importante descartar corretamente?</h2>
        <p>
          O descarte correto é essencial para evitar a contaminação do solo, da água e proteger a vida animal e humana. A conscientização é fundamental para minimizar esses impactos.
        </p>
      </div>
    </div>
  );
}

export default Impacto;
