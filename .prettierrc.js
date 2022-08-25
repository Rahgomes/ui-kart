// doc de configuração do prettierrc para consulta: https://prettier.io/docs/en/options.html

module.exports = {
	//semi - coloca ponto e vírgula no final da instrução
	semi: true,
	//trailingComma - uma vírgula sobrando no final, ex: const obj = {teste: 'texto',}
	trailingComma: 'all',
	//singleQuote - sempre que possível utilize aspas simples
	singleQuote: true,
	//printWidth - largura máxima para quebrar a linha
	printWidth: 120,
	//bracketSameLine - como false quando o componente for de múltiplas linhas ele coloca o > abaixo da última prop
	bracketSameLine: false,
	//arrowParens - como always sempre inclui os parênteses nas arrow functions, mesmo com um parâmetro
	arrowParens: 'always',
	//proseWrap - como always deixa os textos na mesma largura definida pelo printWidth
	proseWrap: 'always',
	//singleAttributePerLine - como true impõe que seja apenas 1 atributo por linha
	singleAttributePerLine: false,
	//bracketSpacing - como true adicionará um espaçamento quando houver chaves, ex: { foo: bar }
	bracketSpacing: true,
}
