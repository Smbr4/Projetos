from flask import Flask, request
app = Flask(__name__) # é como se fosse o nome do arquivo e a forma padrao

#rotas
from flask import render_template

@app.route("/", methods=["GET"])
def homePage():
    return render_template("main.html")

@app.route("/sobre", methods=["GET"])
def paginaSobre():
    return render_template("sobre.html")

@app.route("/contato", methods=["GET", "POST"])
def contato():
    if request.method == "GET":
        return render_template("contato.html")
    

    if request.method == "POST":
        nome = request.form.get('nome')
        email = request.form.get('email')
        mensagem = request.form.get('mensagem')
        dados = {
            "nome": nome,
            "email": email, 
            "mensagem": mensagem
        }
        salvarDados=f"Nome:{dados['nome']} | Email:{dados['email']} | mensagem: {dados['mensagem']}\n"
        with open("mensagens.txt", "a", encoding="UTF-8") as arquivo:
            arquivo.write(salvarDados)

        return render_template("sucesso.html")

if __name__ == "__main__":
        app.run(debug=True)