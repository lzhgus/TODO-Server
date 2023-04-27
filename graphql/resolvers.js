const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        todos: async () => {
            return await prisma.todo.findMany();
        },
    },
    Mutation: {
        createTodo: async (_, { input }) => {
            return await prisma.todo.create({
                data: input
            });
        },
        updateTodo: async (_, { id, input }) => {
            return await prisma.todo.update({
                where: { id: parseInt(id) },
                data: input
            });
        },
        deleteTodo: async (_, { id }) => {
            return await prisma.todo.delete({
                where: { id: parseInt(id) }
            });
        },
    },
};

module.exports = resolvers;