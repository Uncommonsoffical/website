import { createClient, fetchExchange, gql } from '@urql/core'
import type { NoteEntity, Numberish } from 'crossbell'

export const client = createClient({
  url: 'https://indexer.crossbell.io/v1/graphql',
  exchanges: [fetchExchange],
})

export async function fetchNoteBySlug({
  characterId,
  slug,
}: {
  characterId: Numberish
  slug: string
}): Promise<NoteEntity | null> {
  const result = await client
    .query(
      gql`
        query getNotes($characterId: Int!, $slug: JSON!) {
          notes(
            where: {
              characterId: { equals: $characterId }
              deleted: { equals: false }
              metadata: {
                content: { path: ["sources"], array_contains: ["xlog"] }
                OR: [
                  { content: { path: ["attributes"], array_contains: [{ trait_type: "xlog_slug", value: $slug }] } }
                  { content: { path: ["title"], equals: $slug } }
                ]
              }
            }
            orderBy: [{ createdAt: desc }]
            take: 1
          ) {
            characterId
            noteId
            uri
            metadata {
              uri
              content
            }
            owner
            createdAt
            updatedAt
            publishedAt
            transactionHash
            blockNumber
            updatedTransactionHash
            updatedBlockNumber
          }
        }
      `,
      {
        characterId,
        slug: decodeURIComponent(slug),
      },
    )
    .toPromise()

  return result.data.notes[0] ?? null
}
