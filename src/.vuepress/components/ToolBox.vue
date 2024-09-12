<template>
    <div class="tool_box">
        <VPCard v-for="tool in tools" :key="tool.title"
            :title="tool.title"
            :desc="tool.desc"
            :logo="tool.logo"
            :link="tool.link"
        />
    </div>
</template>

<script>
export default {
    name: 'ToolBox',
    data() {
        return {
            tools: [
                {
                    title: 'Compiler Explorer',
                    desc: '实时查看和分析不同语言编译后的汇编的在线工具',
                    logo: 'https://godbolt.org/favicon.ico',
                    link: 'https://godbolt.org/',
                },
                {
                    title: 'Cpp Insight',
                    desc: '以编译器视角展示和解释c++ 代码背后的机制和转换(模版展开，隐式代码生成等)',
                    logo: 'https://cppinsights.io/favicon.ico',
                    link: 'https://cppinsights.io/',
                },
                {
                    title: 'Visualize Code',
                    desc: '支持多语言(c++,python,java)的代码可视化调试执行的在线工具',
                    logo: 'https://pythontutor.com/favicon.ico',
                    link: 'https://pythontutor.com/',   
                },
                {
                    title: 'Draw.io',
                    desc: '在线画图工具，支持流程图、UML等',
                    logo: 'https://app.diagrams.net/favicon.ico',
                    link: 'https://app.diagrams.net/',
                },
            ],
        };
    },
}
</script>

<style scoped>
.tool_box {
    display: grid;
    grid-column: span 2;
}
.VPCard {
    width: 100%;
}

</style>