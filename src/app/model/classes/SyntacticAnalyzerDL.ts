import { TokenTypes } from './../constants/TokenTypes';
import { SyntacticAnalyzer, Token } from 'k4ycer-syntactic-analyzer';


 let stack = [];
            

export class SyntacticAnalyzerDL extends SyntacticAnalyzer{
    constructor(tokens: Token[]){        
        super(tokens);

        this.setInitialRule(this.Program);
    }



    private A(){
        stack.push("A");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Def();
                this.A();
                break;
            case TokenTypes.VarDingoKeyword:
                this.Def();
                this.A();
                break;
            case TokenTypes.PesoToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Array(){
        stack.push("Array");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.OpenBracketDingoToken:
                stack.push(TokenTypes.OpenBracketDingoToken);
                this.consume(TokenTypes.OpenBracketDingoToken);
                this.Exprlist();
                stack.push(TokenTypes.CloseBracketDingoToken);
                this.consume(TokenTypes.CloseBracketDingoToken);
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private B(){
        stack.push("B");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                return;
            case TokenTypes.BreakDingoKeyword:
                return;
            case TokenTypes.IdentifierDingo:
                return;
            case TokenTypes.IfDingoKeyword:
                return;
            case TokenTypes.LoopDingoKeyword:
                return;
            case TokenTypes.CloseBraceDingoToken:
                return;
            case TokenTypes.VarDingoKeyword:
                this.Vardef();
                this.B();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private C(){
        stack.push("C");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                this.Stmt();
                this.C();
                break;
            case TokenTypes.BreakDingoKeyword:
                this.Stmt();
                this.C();
                break;
            case TokenTypes.IdentifierDingo:
                this.Stmt();
                this.C();
                break;
            case TokenTypes.IfDingoKeyword:
                this.Stmt();
                this.C();
                break;
            case TokenTypes.LoopDingoKeyword:
                this.Stmt();
                this.C();
                break;
            case TokenTypes.CloseBraceDingoToken:
                return;
            case TokenTypes.ReturnDingoKeyword:
                this.Stmt();
                this.C();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private D(){
        stack.push("D");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                return;
            case TokenTypes.BreakDingoKeyword:
                return;
            case TokenTypes.ElseDingoKeyword:
                return;
            case TokenTypes.ElseIfDingoKeyword:
                stack.push(TokenTypes.ElseIfDingoKeyword);
                this.consume(TokenTypes.ElseIfDingoKeyword);
                stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Expr();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                stack.push(TokenTypes.OpenBraceDingoToken);
                this.consume(TokenTypes.OpenBraceDingoToken);
                this.Stmtlist();
                stack.push(TokenTypes.CloseBraceDingoToken);
                this.consume(TokenTypes.CloseBraceDingoToken);
                this.D();
                break;
            case TokenTypes.IdentifierDingo:
                return;
            case TokenTypes.IfDingoKeyword:
                return;
            case TokenTypes.LoopDingoKeyword:
                return;
            case TokenTypes.CloseBraceDingoToken:
                return;
            case TokenTypes.ReturnDingoKeyword:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Def(){
        stack.push("Def");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Fundef();
                break;
            case TokenTypes.VarDingoKeyword:
                this.Vardef();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Deflist(){
        stack.push("Deflist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.A();
                break;
            case TokenTypes.VarDingoKeyword:
                this.A();
                break;
            case TokenTypes.PesoToken:
                this.A();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private E(){
        stack.push("E");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                return;
            case TokenTypes.CommaDingoToken:
                return;
            case TokenTypes.BarBarDingoToken:
                stack.push(TokenTypes.BarBarDingoToken);
                this.consume(TokenTypes.BarBarDingoToken);
                this.Exprand();
                this.E();
                break;
            case TokenTypes.CloseBracketDingoToken:
                return;
            case TokenTypes.CloseParenDingoToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Else(){
        stack.push("Else");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                return;
            case TokenTypes.BreakDingoKeyword:
                return;
            case TokenTypes.ElseDingoKeyword:
                stack.push(TokenTypes.ElseIfDingoKeyword);
                this.consume(TokenTypes.ElseDingoKeyword);
                stack.push(TokenTypes.OpenBraceDingoToken);
                this.consume(TokenTypes.OpenBraceDingoToken);
                this.Stmtlist();
                stack.push(TokenTypes.CloseBraceDingoToken);
                this.consume(TokenTypes.CloseBraceDingoToken);
                break;
            case TokenTypes.IdentifierDingo:
                return;
            case TokenTypes.IfDingoKeyword:
                return;
            case TokenTypes.LoopDingoKeyword:
                return;
            case TokenTypes.CloseBraceDingoToken:
                return;
            case TokenTypes.ReturnDingoKeyword:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Elseiflist(){
        stack.push("Elseiflist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                this.D();
                break;
            case TokenTypes.BreakDingoKeyword:
                this.D();
                break;
            case TokenTypes.ElseDingoKeyword:
                this.D();
                break;
            case TokenTypes.ElseIfDingoKeyword:
                this.D();
                break;
            case TokenTypes.IdentifierDingo:
                this.D();
                break;
            case TokenTypes.IfDingoKeyword:
                this.D();
                break;
            case TokenTypes.LoopDingoKeyword:
                this.D();
                break;
            case TokenTypes.CloseBraceDingoToken:
                this.D();
                break;
            case TokenTypes.ReturnDingoKeyword:
                this.D();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Expr(){
        stack.push("Expr");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Expror();
                break;
            case TokenTypes.IdentifierDingo:
                this.Expror();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Expror();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Expror();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Expror();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Expror();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Expror();
                break;
            case TokenTypes.MinusDingoToken:
                this.Expror();
                break;
            case TokenTypes.PlusDingoToken:
                this.Expror();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Expradd(){
        stack.push("Expradd");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.IdentifierDingo:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.MinusDingoToken:
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.PlusDingoToken:
                this.Exprmul();
                this.I();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprand(){
        stack.push("Exprand");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.IdentifierDingo:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.MinusDingoToken:
                this.Exprcomp();
                this.F();
                break;
            case TokenTypes.PlusDingoToken:
                this.Exprcomp();
                this.F();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprcomp(){
        stack.push("Exprcomp");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.IdentifierDingo:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.MinusDingoToken:
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.PlusDingoToken:
                this.Exprrel();
                this.G();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprlist(){
        stack.push("Exprlist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.IdentifierDingo:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.MinusDingoToken:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.PlusDingoToken:
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.CloseBracketDingoToken:
                return;
            case TokenTypes.CloseParenDingoToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprlistcont(){
        stack.push("Exprlistcont");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.CommaDingoToken:
                stack.push(TokenTypes.CommaDingoToken);
                this.consume(TokenTypes.CommaDingoToken);
                this.Expr();
                this.Exprlistcont();
                break;
            case TokenTypes.CloseBracketDingoToken:
                return;
            case TokenTypes.CloseParenDingoToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprmul(){
        stack.push("Exprmul");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.IdentifierDingo:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.MinusDingoToken:
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.PlusDingoToken:
                this.Exprunary();
                this.J();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Expror(){
        stack.push("Expror");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.IdentifierDingo:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.MinusDingoToken:
                this.Exprand();
                this.E();
                break;
            case TokenTypes.PlusDingoToken:
                this.Exprand();
                this.E();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprprimary(){
        stack.push("Exprprimary");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                this.ExprprimaryP();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Array();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Lit();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Lit();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Lit();
                break;
            case TokenTypes.OpenParenDingoToken:
                stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Expr();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private ExprprimaryP(){
        stack.push("Exprprimary");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                return;
            case TokenTypes.AmpersandAmpersandDingoToken:
                return;
            case TokenTypes.AsteriskDingoToken:
                return;
            case TokenTypes.CommaDingoToken:
                return;
            case TokenTypes.ExclamationEqualsDingoToken:
                return;
            case TokenTypes.EqualsEqualsDingoToken:
                return;
            case TokenTypes.GreaterThanDingoToken:
                return;
            case TokenTypes.GreaterThanEqualsDingoToken:
                return;
            case TokenTypes.LessThanDingoToken:
                return;
            case TokenTypes.LessThanEqualsDingoToken:
                return;
            case TokenTypes.OpenParenDingoToken:
                stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Exprlist();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                break;
            case TokenTypes.MinusDingoToken:
                return;
            case TokenTypes.BarBarDingoToken:
                return;
            case TokenTypes.PercentDingoToken:
                return;
            case TokenTypes.PlusDingoToken:
                return;
            case TokenTypes.CloseBracketDingoToken:
                return;
            case TokenTypes.CloseParenDingoToken:
                return;
            case TokenTypes.SlashDingoToken:
                return;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprrel(){
        stack.push("Exprrel");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.IdentifierDingo:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.MinusDingoToken:
                this.Expradd();
                this.H();
                break;
            case TokenTypes.PlusDingoToken:
                this.Expradd();
                this.H();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Exprunary(){
        stack.push("Exprunary");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                this.Opunary();
                this.Exprunary();
                break;
            case TokenTypes.IdentifierDingo:
                this.Exprprimary();
                break;
            case TokenTypes.OpenBracketDingoToken:
                this.Exprprimary();
                break;
            case TokenTypes.CharacterLiteralDingo:
                this.Exprprimary();
                break;
            case TokenTypes.IntegerLiteralDingo:
                this.Exprprimary();
                break;
            case TokenTypes.StringLiteralDingo:
                this.Exprprimary();
                break;
            case TokenTypes.OpenParenDingoToken:
                this.Exprprimary();
                break;
            case TokenTypes.MinusDingoToken:
                this.Opunary();
                this.Exprunary();
                break;
            case TokenTypes.PlusDingoToken:
                this.Opunary();
                this.Exprunary();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    // Funciones Dave:

    
    private F(){
        stack.push("F");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
            case TokenTypes.CommaDingoToken:
            case TokenTypes.BarBarDingoToken:
            case TokenTypes.CloseParenDingoToken:
            case TokenTypes.CloseBracketDingoToken:
            return;

            case TokenTypes.AmpersandAmpersandDingoToken:
                stack.push(TokenTypes.AmpersandAmpersandDingoToken);
                this.consume(TokenTypes.AmpersandAmpersandDingoToken);
                this.Exprcomp();
                this.F();
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Funcall(){
        stack.push("Funcall");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Exprlist();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Fundef(){
        stack.push("Fundef");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Paramlist();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                stack.push(TokenTypes.OpenBraceDingoToken);
                this.consume(TokenTypes.OpenBraceDingoToken);
                this.Vardeflist();
                this.Stmtlist();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseBraceDingoToken)
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private G(){
        stack.push("G");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
            case TokenTypes.AmpersandAmpersandDingoToken:
            case TokenTypes.CommaDingoToken:
            case TokenTypes.BarBarDingoToken:
            case TokenTypes.CloseBracketDingoToken:
            case TokenTypes.CloseParenDingoToken:
                return;
            case TokenTypes.ExclamationEqualsDingoToken:
                this.Opcomp();
                this.Exprrel();
                this.G();
                break;
            case TokenTypes.EqualsEqualsDingoToken:
                this.Opcomp();
                this.Exprrel();
                this.G();
                break;    
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private H(){
        stack.push("H");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
            case TokenTypes.AmpersandAmpersandDingoToken:
            case TokenTypes.CommaDingoToken:
            case TokenTypes.ExclamationEqualsDingoToken:
            case TokenTypes.EqualsEqualsDingoToken:
            case TokenTypes.BarBarDingoToken:
            case TokenTypes.CloseBracketDingoToken:
            case TokenTypes.CloseParenDingoToken:
                return;
            case TokenTypes.GreaterThanDingoToken:
                this.Oprel();
                this.Expradd();
                this.H();
                break;
            case TokenTypes.GreaterThanEqualsDingoToken:
                this.Oprel();
                this.Expradd();
                this.H();
                break;
            case TokenTypes.LessThanDingoToken:
                this.Oprel();
                this.Expradd();
                this.H();
                break;  
            case TokenTypes.LessThanEqualsDingoToken:
                this.Oprel();
                this.Expradd();
                this.H();
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private I(){
        stack.push("I");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
            case TokenTypes.AmpersandAmpersandDingoToken:
            case TokenTypes.CommaDingoToken:
            case TokenTypes.ExclamationEqualsDingoToken:
            case TokenTypes.EqualsEqualsDingoToken:
            case TokenTypes.GreaterThanDingoToken:
            case TokenTypes.GreaterThanEqualsDingoToken:
            case TokenTypes.LessThanDingoToken:
            case TokenTypes.LessThanEqualsDingoToken:
            case TokenTypes.BarBarDingoToken:
            case TokenTypes.CloseBracketDingoToken:
            case TokenTypes.CloseParenDingoToken:
                return;

            case TokenTypes.PlusDingoToken:
                this.Opadd();
                this.Exprmul();
                this.I();
                break;
            case TokenTypes.MinusDingoToken:
                this.Opadd();
                this.Exprmul();
                this.I();
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }


    private Id(){
        stack.push("Id");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Idlist(){
        stack.push("Idlist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Id();
                this.Idlistcont();
                break;
                
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Idlistcont(){
        stack.push("Idlistcont");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.CloseParenDingoToken:
            case TokenTypes.SemicolonDingoToken:
                return;
            case TokenTypes.CommaDingoToken:    
                stack.push(TokenTypes.CommaDingoToken);
                this.consume(TokenTypes.CommaDingoToken);
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                this.Idlistcont();
                break;
                
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }


    private J(){
        stack.push("J");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
            case TokenTypes.AmpersandAmpersandDingoToken:            
            case TokenTypes.CommaDingoToken: 
            case TokenTypes.ExclamationEqualsDingoToken:
            case TokenTypes.EqualsEqualsDingoToken:
            case TokenTypes.GreaterThanDingoToken:
            case TokenTypes.GreaterThanEqualsDingoToken:
            case TokenTypes.LessThanDingoToken:
            case TokenTypes.LessThanEqualsDingoToken:  
            case TokenTypes.MinusDingoToken:
            case TokenTypes.PlusDingoToken:
            case TokenTypes.BarBarDingoToken:
            case TokenTypes.CloseBracketDingoToken:
            case TokenTypes.CloseParenDingoToken:
                return;

            case TokenTypes.AsteriskDingoToken:
                this.Opmul();
                this.Exprunary();
                this.J();
                break;

            case TokenTypes.PercentDingoToken:    
                this.Opmul();
                this.Exprunary();
                this.J();
                break;
            case TokenTypes.SlashDingoToken:    
                this.Opmul();
                this.Exprunary();
                this.J();
                break;

                
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Lit(){
        stack.push("Lit");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IntegerLiteralDingo:
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IntegerLiteralDingo);
                break;
            case TokenTypes.CharacterLiteralDingo:
                stack.push(TokenTypes.CharacterLiteralDingo);
                this.consume(TokenTypes.CharacterLiteralDingo);
                break;
            case TokenTypes.StringLiteralDingo: 
                stack.push(TokenTypes.StringLiteralDingo); 
                this.consume(TokenTypes.StringLiteralDingo);
                break;
                
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Opadd(){
        stack.push("Opadd");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.MinusDingoToken:
            stack.push(TokenTypes.MinusDingoToken);
                this.consume(TokenTypes.MinusDingoToken);
                break;
            case TokenTypes.PlusDingoToken:
            stack.push(TokenTypes.PlusDingoToken);
                this.consume(TokenTypes.PlusDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Opcomp(){
        stack.push("Opcomp");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationEqualsDingoToken:
                stack.push(TokenTypes.ExclamationEqualsDingoToken);
                this.consume(TokenTypes.ExclamationEqualsDingoToken);
                break;
            case TokenTypes.EqualsEqualsDingoToken:
                stack.push(TokenTypes.EqualsEqualsDingoToken);
                this.consume(TokenTypes.EqualsEqualsDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Opmul(){
        stack.push("Opmul");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.AsteriskDingoToken:
                stack.push(TokenTypes.AsteriskDingoToken);
                this.consume(TokenTypes.AsteriskDingoToken);
                break;
            case TokenTypes.PercentDingoToken:
            stack.push(TokenTypes.PercentDingoToken);
                this.consume(TokenTypes.PercentDingoToken);
                break;
            case TokenTypes.SlashDingoToken:
            stack.push(TokenTypes.SlashDingoToken);
                this.consume(TokenTypes.SlashDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Oprel(){
        stack.push("Oprel");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.GreaterThanDingoToken:
                stack.push(TokenTypes.GreaterThanDingoToken);
                this.consume(TokenTypes.GreaterThanDingoToken);
                break;
            case TokenTypes.GreaterThanEqualsDingoToken:
            stack.push(TokenTypes.GreaterThanEqualsDingoToken);
                this.consume(TokenTypes.GreaterThanEqualsDingoToken);
                break;
            case TokenTypes.LessThanDingoToken:
            stack.push(TokenTypes.LessThanDingoToken);
                this.consume(TokenTypes.LessThanDingoToken);
                break;
            case TokenTypes.LessThanEqualsDingoToken:
            stack.push(TokenTypes.LessThanEqualsDingoToken);
                this.consume(TokenTypes.LessThanEqualsDingoToken);
                break;
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Opunary(){
        stack.push("Opunary");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ExclamationDingoToken:
                stack.push(TokenTypes.ExclamationDingoToken);
                this.consume(TokenTypes.ExclamationDingoToken);
                break;
            case TokenTypes.MinusDingoToken:
                stack.push(TokenTypes.MinusDingoToken);
                this.consume(TokenTypes.MinusDingoToken);
                break;
            case TokenTypes.PlusDingoToken:
                stack.push(TokenTypes.PlusDingoToken);
                this.consume(TokenTypes.PlusDingoToken);
                break;
        
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Paramlist(){
        stack.push("Paramlist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                this.Idlistcont();
                break;
            case TokenTypes.CloseParenDingoToken:
                return;
        
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Program(){
         stack.push("Program");
         console.log(stack);

        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Deflist();
                break;
            case TokenTypes.VarDingoKeyword:
                this.Deflist();
                break;
            case TokenTypes.PesoToken:
                this.Deflist();
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmt(){
        stack.push("Stmt");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                this.Stmtempt();
                break;
            case TokenTypes.BreakDingoKeyword:
                this.Stmtbreak();
                break;
            case TokenTypes.IdentifierDingo:
                this.consume(TokenTypes.IdentifierDingo);
                this.Stmtp();
                break;
            case TokenTypes.IfDingoKeyword:
                this.Stmtif();
                break;
            case TokenTypes.LoopDingoKeyword:
                this.Stmtloop();
                break; 
            case TokenTypes.ReturnDingoKeyword:
                this.Stmtreturn();
                break;             
                    
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtp(){
        stack.push("Stmtp");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.EqualsDingoToken:
            stack.push(TokenTypes.EqualsDingoToken);
                this.consume(TokenTypes.EqualsDingoToken);
                this.Expr();
                break;
            case TokenTypes.OpenParenDingoToken:
            stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Exprlist();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                break;
            case TokenTypes.PlusPlusDingoToken:
                stack.push(TokenTypes.PlusPlusDingoToken);
                this.consume(TokenTypes.PlusPlusDingoToken);
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;
            case TokenTypes.MinusMinusDingoToken:
            stack.push(TokenTypes.MinusMinusDingoToken);
                this.consume(TokenTypes.MinusMinusDingoToken);
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;    
                    
                    
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtassign(){
        stack.push("Stmtassign");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
            stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                stack.push(TokenTypes.EqualsDingoToken);
                this.consume(TokenTypes.EqualsDingoToken);
                this.Expr();
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;
                                
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtbreak(){
        stack.push("Stmtbreak");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.BreakDingoKeyword:
            stack.push(TokenTypes.BreakDingoKeyword);
                this.consume(TokenTypes.BreakDingoKeyword);
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;                              
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtdecr(){
        stack.push("Stmtdecr");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
            stack.push(TokenTypes.IdentifierDingo);
                this.consume(TokenTypes.IdentifierDingo);
                stack.push(TokenTypes.MinusMinusDingoToken);
                this.consume(TokenTypes.MinusMinusDingoToken);
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtempt(){
        stack.push("Stmtempt");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;
                                            
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtfuncall(){
        stack.push("Stmtfuncall");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Funcall();
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtif(){
        stack.push("Stmtif");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IfDingoKeyword:
            stack.push(TokenTypes.IfDingoKeyword);
                this.consume(TokenTypes.IfDingoKeyword);
                stack.push(TokenTypes.OpenParenDingoToken);
                this.consume(TokenTypes.OpenParenDingoToken);
                this.Expr();
                stack.push(TokenTypes.CloseParenDingoToken);
                this.consume(TokenTypes.CloseParenDingoToken);
                stack.push(TokenTypes.OpenBraceDingoToken);
                this.consume(TokenTypes.OpenBraceDingoToken);
                this.Stmtlist();
                stack.push(TokenTypes.CloseBraceDingoToken);
                this.consume(TokenTypes.CloseBraceDingoToken);
                this.Elseiflist();
                this.Else();
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtincr(){
        stack.push("Stmtincr");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Id();
                 stack.push(TokenTypes.PlusPlusDingoToken);
                this.consume(TokenTypes.PlusPlusDingoToken);
                 stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtlist(){
        stack.push("Stmtlist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                this.C();
                break;
            case TokenTypes.BreakDingoKeyword:
                this.C();
                break;
            case TokenTypes.IdentifierDingo:
                this.C();
                break;
            case TokenTypes.IfDingoKeyword:
                this.C();
                break;
            case TokenTypes.LoopDingoKeyword:
                this.C();
                break;
            case TokenTypes.CloseBraceDingoToken:
                this.C();
                break;
            case TokenTypes.ReturnDingoKeyword:
                this.C();
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtloop(){
        stack.push("Stmtloop");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.LoopDingoKeyword:
            stack.push(TokenTypes.LoopDingoKeyword);
                this.consume(TokenTypes.LoopDingoKeyword);
                stack.push(TokenTypes.OpenBraceDingoToken);
                this.consume(TokenTypes.OpenBraceDingoToken);
                this.Stmtlist();
                stack.push(TokenTypes.CloseBraceDingoToken);
                this.consume(TokenTypes.CloseBraceDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Stmtreturn(){
        stack.push("Stmtreturn");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.ReturnDingoKeyword:
            stack.push(TokenTypes.ReturnDingoKeyword);
                this.consume(TokenTypes.ReturnDingoKeyword);
                this.Expr();
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Vardef(){
        stack.push("Vardef");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.VarDingoKeyword:
            stack.push(TokenTypes.VarDingoKeyword);
                this.consume(TokenTypes.VarDingoKeyword);
                this.Varlist();
                stack.push(TokenTypes.SemicolonDingoToken);
                this.consume(TokenTypes.SemicolonDingoToken);
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Vardeflist(){
        stack.push("Vardeflist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.SemicolonDingoToken:
                this.B();
                break;
            case TokenTypes.BreakDingoKeyword:
                this.B();
                break;
            case TokenTypes.IdentifierDingo:
                this.B();
                break;
            case TokenTypes.IfDingoKeyword:
                this.B();
                break;
            case TokenTypes.CloseBraceDingoToken:
                this.B();
                break;
            case TokenTypes.ReturnDingoKeyword:
                this.B();
                break;
            case TokenTypes.VarDingoKeyword:
                this.B();
                break;

            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }

    private Varlist(){
        stack.push("Varlist");
        console.log(stack);
        switch(this.currentToken.type){
            case TokenTypes.IdentifierDingo:
                this.Idlist();
                break;
            
            default:
                throw new Error(`Token "${this.currentToken.value}" inválido en la linea ${this.currentToken.line}, columna ${this.currentToken.column}`);
        }
    }
        
}