<template>
    <el-main>
        <el-row :gutter="12">
                <el-card v-for="item in getPedidos" :key="item._id" shadow="hover">
                    Nome da Empresa: {{item.empresa.nome}}
                    <br>
                    Produto: {{item.produto.nome}}
                    <br>
                    Preço: {{item.produto.preco}}
                    <br>
                    Quantidade: {{item.quantidade}}
                    <br>
                    Total: {{item.produto.preco * item.quantidade}}
                    <br>
                    Nome do Cliente: {{item.cliente.nome}}
                    <br>
                    Status: {{item.status}}
                    <br>
                    <el-button type="success" @click="listaParaPagar(item._id)">
                        Realizar Pagamento
                    </el-button>
                    <br>
                    <el-button type="danger" @click="deletar(item._id)">
                        Excluir
                    </el-button>
                </el-card>
        </el-row>
        <el-button type="danger" @click="back">
            Voltar
        </el-button>
    </el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ListaPedidos',
    mounted() {
        this.listagemPedidos()
    },
    methods: {
        ...mapActions([
            'listaPedidosCliente',
            'listaPedido',
            'deletePedido'
        ]),
        deletar(id) {
            this.deletePedido(id).then( () => {
                this.$router.push('/cliente/pedidos')
            })
        },
        listaParaPagar(id) {
            this.listaPedido(id).then( () => {
                this.$router.push('/cliente/pagamento')
            })
        },
        listagemPedidos() {
            this.listaPedidosCliente()
        },
        back() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'getPedidos'
        ])
    }
}
</script>