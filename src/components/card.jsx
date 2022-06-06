import { Box, Flex, Heading, Icon,Text} from "@chakra-ui/react";
import React from "react";
import { FcSimCardChip } from "react-icons/fc";

const CreditCard = ({info}) => {
	return (
		<Box
			w="33%"
            h="280px"
			m="auto"
			my="5%"
			color="white"
			bgColor="rgb(246,76,100)"
			borderRadius="10px"

		>
            <Flex direction="column" gap="20px">
			<Heading textAlign="right" p="20px" mr="20px">VISA</Heading>
            <Icon as={FcSimCardChip} w={10} h={10} ml="10%" />
            <Text ml="10%" align="left" fontSize="lg">{info.cardNumber}</Text>

            <Flex direction="row" justifyContent="space-around" mt="3%">
                <Flex direction="column">
                    <Text fontSize="md" textAlign="left">CARD HOLDER</Text>
                    <Text fontSize="md">{info.cardHolder}</Text>
                </Flex>
                <Flex direction="column">
                    <Text fontSize="md" textAlign="left">EXPIRY</Text>
                    <Text fontSize="md">{`${info.expMonth}/${info.expYear}`}</Text>
                </Flex>
                <Flex direction="column">
                    <Text fontSize="md" textAlign="left">CVC</Text>
                    <Text fontSize="md">{info.cvc}</Text>
                </Flex>
            </Flex>

            </Flex>
		</Box>
	);
};

export default CreditCard;