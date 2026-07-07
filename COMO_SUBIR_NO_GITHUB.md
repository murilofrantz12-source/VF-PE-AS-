# Como subir o site no GitHub Pages

## 1. Criar repositorio

1. Entre no GitHub.
2. Clique em `New repository`.
3. Nome sugerido: `vf-pecas-teste`.
4. Marque como `Public`.
5. Nao marque README, .gitignore ou license.
6. Clique em `Create repository`.

## 2. Conectar esta pasta ao repositorio

Depois de criar o repositorio, copie o link HTTPS dele. Deve ser parecido com:

```bash
https://github.com/SEU_USUARIO/vf-pecas-teste.git
```

No terminal, dentro desta pasta, rode:

```bash
git remote add origin https://github.com/SEU_USUARIO/vf-pecas-teste.git
git push -u origin main
```

## 3. Ativar GitHub Pages

1. No repositorio, entre em `Settings`.
2. Clique em `Pages`.
3. Em `Build and deployment`, escolha `Deploy from a branch`.
4. Em `Branch`, escolha `main` e `/root`.
5. Clique em `Save`.

O link vai ficar assim:

```text
https://SEU_USUARIO.github.io/vf-pecas-teste/
```

Admin:

```text
https://SEU_USUARIO.github.io/vf-pecas-teste/admin/
```

## 4. Atualizar depois

Sempre que o site for alterado, envie de novo:

```bash
git add .
git commit -m "Atualiza site"
git push
```
