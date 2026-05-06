# Eletrouni Smart Flow

**Disciplina:** Engenharia de Prompt e Aplicações em IA  
**Nível:** Graduação — 2026

---

## Sobre o Projeto

O **Eletrouni Smart Flow** é um ecossistema de IA voltado ao monitoramento inteligente do consumo de energia elétrica residencial. O sistema coleta dados de uma tomada inteligente (Tuya/Smart Life), processa essas informações via Make.com, analisa com IA e exibe os insights em tempo real no site SmartPlug AI.

---

## Estrutura do Repositório / ZIP

```
📁 Eletrouni Smart Flow
├── 📄 README.md                        ← este arquivo
├── 📄 Memorial_Construcao_EletroUni.docx  ← memorial técnico completo
├── 📄 Diagrama_Ecossistema.png         ← diagrama do ecossistema
├── 📁 site/
│   └── index.html                      ← código do site SmartPlug AI
├── 📁 evidencias/
│   ├── make_cenario.png                ← print do cenário no Make
│   ├── make_execucao.png               ← print de execução bem-sucedida
│   ├── site_monitoramento.png          ← print do site com análise da IA
│   └── tuya_cloud.png                  ← print da Tuya Cloud configurada
```

---

## Como Navegar no Material

### 1. Site (Interface)
O site está hospedado na Vercel e pode ser acessado diretamente:
> https://projeto-eletro-uni-vs-code.vercel.app

Para acessar como administrador e ver o Simulador e Monitoramento:
- **E-mail:** admin@teste.com  
- **Senha:** qualquer senha

### 2. Automação (Make)
O cenário de automação está configurado no Make.com com o fluxo:
```
[Scheduler] → [Set Variable x3] → [Make AI Toolkit] → [HTTP POST → Site]
```

### 3. Integração com Tuya
A tomada NovaDigital é conectada via Tuya IoT Platform. Os dados de potência (`cur_power`) e consumo (`add_ele`) são lidos via API REST e enviados ao Make.

### 4. Memorial de Construção
O arquivo `Memorial_Construcao_EletroUni.docx` contém:
- Descrição do problema e público-alvo
- Ferramentas utilizadas e justificativas
- Prompt de IA utilizado
- Fluxo completo da automação
- Limitações e melhorias futuras

---

## Ecossistema

```
Tomada Inteligente (Tuya)
        ↓
  Tuya Cloud (API REST)
        ↓
    Make.com
        ↓
  Make AI Toolkit (IA)
        ↓
  HTTP POST → /api/energia
        ↓
  Site SmartPlug AI (Vercel)
```

---

## Repositório GitHub

https://github.com/phalvees07-dotcom/Projeto-EletroUni---vs-code

---

*Eletrouni Smart Flow — 2026*
