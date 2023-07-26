<img src="https://github.com/clairefro/aribotle/blob/main/src/assets/logo.png?raw=true" width="64" style="margin: 0 auto;"/>

### Aribotle
A chrome extension for detecting logical fallacies in web text


Built with boiler: https://github.com/guocaoyi/create-chrome-ext

[Demo video](https://www.loom.com/share/ddf948318b5e4197815e5fbcba128d2a?sid=22a0a82a-2d7e-4361-8aef-3bbdf6ad22b7)

<div style="display: flex; flex-wrap: wrap; ">
<img width="200" alt="image" src="https://github.com/guocaoyi/create-chrome-ext/assets/9841162/c0c297bb-a3b5-4725-9e9b-a144ddfa1c48">

<img width="200" alt="image" src="https://github.com/guocaoyi/create-chrome-ext/assets/9841162/e5322225-e841-416c-883b-e5ee945a121c">

<img width="200" alt="image" src="https://github.com/guocaoyi/create-chrome-ext/assets/9841162/b30c393b-a2ce-4903-909c-d61d4192786f">

<img width="200" alt="image" src="https://github.com/guocaoyi/create-chrome-ext/assets/9841162/5aa14ef2-fc38-41b6-8cdd-c07a756619b4">
<div>


### Usage
This chrome extension won't be published until I finish the TODO's.

In the meantime, you can run this extension locally:

1. `git clone` this repo locally

1. Run `npm i`

1. Run `npm run dev`

1. navigate to `chrome://extensions` in URL bar of your Chrome browser

1. ensure Developer mode is enabled in upper right <img src="https://github.com/guocaoyi/create-chrome-ext/assets/9841162/eb2d9429-3327-48bf-a3ab-b8005cc063d1" width="100px">

1. Select "Load unpacked"

1. Point to the `build` dir in your cloned local repo

1. Pin Aribotle to your toolbar

1. (do once) Get an OpenAI API Key from [here](https://platform.openai.com/account/api-keys) and add it in Aribotle "ApiKey Settings"

### TODO
- [ ] Enable clearing API Key
- [ ] Onboarding wizard for getting BYO-API Key
- [ ] Make it prettier
- [ ] Enable caching/history
- [ ] Settings for user custom fallacies
- [ ] Try out other LLM models and maybe find one that's free...
- [ ] Add cost estimate tokenizer if sticking with GPT4
